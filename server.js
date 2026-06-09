const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta POST /registro
app.post('/registro', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta POST /incidencia
app.post('/incidencia', (req, res) => {
  const { tipo, descripcion } = req.body;
  res.json({
    estado: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
