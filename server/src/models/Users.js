const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    dateCreat: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);