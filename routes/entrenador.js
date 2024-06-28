const express = require('express');
const router = express.Router();
const Entrenador = require('../models/mdlEntrenador');

// Ruta para crear un nuevo entrenador
router.post('/entrenador', async (req, res) => {
    const { nombre, edad, equipo } = req.body;
    try {
        const nuevoEntrenador = new Entrenador({ nombre, edad, equipo });
        await nuevoEntrenador.save();
        res.status(201).send(nuevoEntrenador);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Ruta para obtener el perfil del entrenador
router.get('/entrenador', async (req, res) => {
    try {
        const entrenador = await Entrenador.findOne();
        if (!entrenador) {
            return res.status(404).send({ error: 'Entrenador no encontrado' });
        }
        res.send(entrenador);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para crear un equipo completo de Pokémon para el entrenador
router.post('/entrenador/equipo', async (req, res) => {
    const { equipo } = req.body;
    try {
        const entrenador = await Entrenador.findOne();
        if (!entrenador) {
            return res.status(404).send({ error: 'Entrenador no encontrado' });
        }
        entrenador.equipo = equipo;
        await entrenador.save();
        res.status(201).send(entrenador);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
