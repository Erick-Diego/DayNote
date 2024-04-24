const mongoose = require('mongoose');

const Dbconfig = 'mongodb+srv://erickdiego515max:SYNW2xOxtmRGjFU4@cluster0.j2xuhyf.mongodb.net/Notes';
const con = mongoose.connect(Dbconfig);

module.exports = con;

