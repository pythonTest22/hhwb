const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
});

const EntrenadorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    equipo: {
        type: [PokemonSchema],
        default: [],
    },
});

const Entrenador = mongoose.model('Entrenador', EntrenadorSchema);

module.exports = Entrenador;
