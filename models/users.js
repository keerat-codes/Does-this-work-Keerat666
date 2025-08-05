const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
firstName : { type:  String, description: "Required Field", required: true },
middleName : { type:  String, description: "Required Field", required: true },
lastName : { type:  String, description: "Required Field", required: true },
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('users', usersSchema);