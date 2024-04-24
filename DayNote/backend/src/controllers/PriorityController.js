const Annotaions = require('../models/AnnotationData');

module.exports = {

    async read(request, response){
        const priority = request.query;

        const prioritynotes = await Annotaions.find(priority);

        return response.json(prioritynotes);
    },

    async update(request, response){
        const { id } =  request.params;

        const annotationtrue = await Annotaions.findOne({ _id : id });

        if(annotationtrue.priority){
            annotationtrue.priority = false;
        } else {
            annotationtrue.priority = true;
        }

        await annotationtrue.save();

        return response.json(annotationtrue);
    }

}