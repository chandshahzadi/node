const mongoose = require('mongoose');

const data = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    semester: String,
    dateOfBirth: String,
    address: String,
    phoneNumber: String

});

module.exports = mongoose.model('user',  data);
