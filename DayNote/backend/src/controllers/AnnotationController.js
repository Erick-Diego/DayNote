const { request } = require('express');
const Annotaions = require('../models/AnnotationData');

module.exports = {

    async read(request, response){
        const annotationlist = await Annotaions.find();

        return response.json(annotationlist);

    },

    async create(request, response){

        const {title, notes, priority} = request.body;

        if(!notes || !title){
            return response.status(400).json({error: "Necessario titulo ou anotação"});
        }

        const annotationcreated = await Annotaions.create({
           title,
           notes,
           priority 
        });

        return response.json(annotationcreated);
    },

    async delete(request, response){
        const { id } =  request.params;

        const annotationdeleted = await Annotaions.findOneAndDelete({ _id : id });

        if(annotationdeleted){
            return response.json(annotationdeleted);
        }

        return response.status(401).json({ error: "Não achou o registro para deletar "});
    }
}