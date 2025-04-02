const express = require('express');
const connectDB = require('./database/connection');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());

// Conexión a DB
connectDB();

// Rutas
app.use('/api', require('./routes'));

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});