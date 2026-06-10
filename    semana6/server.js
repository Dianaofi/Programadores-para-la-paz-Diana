const express = require('express');
const app = express();
const port = 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta /registro
app.post('/registro', (req, res) => {
  const datos = req.body;
  console.log('Datos recibidos:', datos);
  res.status(200).json({ mensaje: 'Registro recibido correctamente' });
});

// Ruta /incidencia
app.post('/incidencia', (req, res) => {
  const datos = req.body;
  console.log('Incidencia recibida:', datos);
  res.status(200).json({ mensaje: 'Incidencia recibida correctamente' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});