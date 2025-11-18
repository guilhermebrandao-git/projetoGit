const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    email : String,
    senha : String,
    nome : String,
    cargo : String,
    status : String
});

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

module.exports = UsuarioModel;