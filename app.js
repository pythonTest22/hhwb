const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const entrenadorRoutes = require('./routes/entrenador');

const app = express();
const port = process.env.PORT || 5000;

// Middleware para analizar cuerpos de solicitudes en formato JSON
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tu_basedatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Verificar la conexión a la base de datos
mongoose.connection.on('connected', () => {
    console.log('Conectado a la base de datos MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Error al conectar a la base de datos MongoDB:', err);
});

// Registrar las rutas de entrenador
app.use('/api', entrenadorRoutes);

// Servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'build')));

// Manejar cualquier otra ruta con el archivo index.html del frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
