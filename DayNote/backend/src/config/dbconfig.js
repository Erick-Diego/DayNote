const mongoose = require('mongoose');

const Dbconfig = 'mongodb+srv://<usuario>:<senha>@cluster0.j2xuhyf.mongodb.net/Notes';
const con = mongoose.connect(Dbconfig);

module.exports = con;
