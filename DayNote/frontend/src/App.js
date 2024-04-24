//Componentes = é uma estrutura de código que retorna um HTML, CSS, ou JS.
//Propriedades = São informações que um componete PAI passa para um componente filho.
//Estados = Função que armazena uma informação e manipula a mesma.

import React, { useState, useEffect } from 'react';
import Notes from './components/notes';
import Radio from './components/radiobutton';
import epi from './services/epi';

function App() {
  const [ title, setTitle ] = useState('');
  const [ notes, setNotes ] = useState('');
  const [ allnotes, setallNotes ] = useState([]);
  const [ filter, setFilter ] = useState('a');

  useEffect(() => {
    getAllnotes();
  }, [] );
  
  async function getAllnotes(){
    const response = await epi.get('/annotations',)
    setallNotes(response.data);
  }

  async function handledelete(id){
    const deletednote = await epi.delete(`/annotations/${id}`);
    if(deletednote){
      setallNotes(allnotes.filter(note => note._id !== id));
    }
  }

  async function handlechangepriority(id){
    const note = await epi.post(`/priorities/${id}`);
    if(note){
      getAllnotes();
    }
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    const response = await epi.post('/annotations', {
      title,
      notes,
      priority: false
    });
    setallNotes([ ...allnotes, response.data]);
    setTitle('')
    setNotes('')
  }

  useEffect(() => {
    function enablebutton(){
      let btn = document.getElementById('btn-enviar');
      btn.style.background = '#fac5ba';
      if(title && notes){
        btn.style.background = '#f0684d';
        btn.disabled = false;
      } else {
        btn.disabled = true; 
      }
    }
    enablebutton();
  }, [title, notes])

  // Função para filtrar as notas
  function filterNotes() {
    let filteredNotes;

    if (filter === 'a') {
      filteredNotes = allnotes;
    } else if (filter === 'd') {
      filteredNotes = allnotes.filter(note => note.priority === false);
    } else if (filter === 'e') {
      filteredNotes = allnotes.filter(note => note.priority === true);
    }
    return filteredNotes;
}

  return (
    <div id = 'app'>
      <aside id='left'>

        <strong>Caderno de Notas</strong>

        <form id='form' onSubmit={handleSubmit}>
          <div className='input-block-up'>
            <label htmlFor = "input-title" id='label-title'>Título</label>
            <input id='input-title' maxLength="30"  value={title} required onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className='input-block-mid'>
            <label htmlFor = "input-notes" id='label-notes'>Anotções</label>
            <textarea id='input-notes' value={notes} required onChange={e => setNotes(e.target.value)}/>
          </div>
          <div className='input-block-bottom'>
            <button type='submit' id='btn-enviar'>Salvar</button>
          </div>
          <div className='spaceradio'> 
            < Radio setFilter={setFilter} />
          </div>
        </form>

      </aside>
      <main id='main'>
        <ul id='ulnotes'>
          {
            filterNotes().map(data => (
              <Notes
                key={data._id}
                data={data}
                handledelete={handledelete}
                handlechangepriority={handlechangepriority}
              />
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App; 


