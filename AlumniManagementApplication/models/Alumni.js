const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    fullname: String,
    id: String,
    birthday: Date,
    major: String,
    email: String,
    phone: String,
    address: String,
});
const Alumni = mongoose.model('alumnis', alumniSchema);

module.exports = Alumni