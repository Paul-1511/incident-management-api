const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(' Conectado a MongoDB');
  } catch (error) {
    console.error(' Error de conexión a MongoDB:', error.message);
    process.exit(1); // Detener la aplicación si no hay conexión
  }
};

module.exports = connectDB;