const Annotaions = require('../models/AnnotationData');

module.exports = {

    async update(request, response){
        const { id } =  request.params;

        const { notes } = request.body;

        const annotation = await Annotaions.findOne({ _id : id });

        if(notes){
            annotation.notes = notes;

            await annotation.save();
        }

        return response.json(annotation);

    }

}