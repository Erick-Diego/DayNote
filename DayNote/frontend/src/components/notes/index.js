import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './default.css';
import './priority.css';
import api from '../../services/epi';

function Notes({ data, handledelete, handlechangepriority }){
    const [changednote, setchangednote] = useState('');

    async function handlesave(e, notes){
        e.style.cursor = 'default';
        e.style.boxShadow = 'none';
        if(changednote && changednote !== notes){
            await api.post(`/contents/${data._id}`, {
                notes: changednote,
            });
        }
    }

    function handleedit(e, priority){
        e.style.cursor = 'text';
        e.style.borderRadius = '5px';

        if(priority){
            e.style.boxShadow = '0 0 5px white';
        } else {
            e.style.boxShadow = '0 0 5px gray';
        }
    }

    return(
        <>
            <li id='linotes1' className={data.priority ? "notepad-infos-priority" : "notepad-infos" }>
                <div id='note'>
                <strong>{ data.title }</strong>
                <div id='x' title='Excluir Anotação'>
                    <AiOutlineDelete onClick={() => handledelete(data._id)}/>
                </div>
                </div>
                <div className='input-block-mid2'>
                <textarea 
                    id='input-notes2' 
                    defaultValue={ data.notes }
                    onClick={ e => handleedit(e.target, data.priority)}
                    onChange={ e => setchangednote(e.target.value) }
                    onBlur={e => handlesave(e.target, data.notes)}
                />
                </div>
                <div id='changepriority' title='Marcar como Prioridade!'>
                    <AiOutlineExclamationCircle onClick={() => handlechangepriority(data._id)}/>
                </div>
            </li>
        </>
    );
}

export default Notes; 