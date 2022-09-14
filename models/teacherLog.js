const mongoose = require('mongoose');

const data =  mongoose.Schema({
    firstName: String,
    lastName: String,
    teacherId: String,
    room: String
});
module.exports = mongoose.model('teacherLog', data);