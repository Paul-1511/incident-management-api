const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  reporter: {
    type: String,
    required: [true, 'El nombre del reportero es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
  },
  status: {
    type: String,
    enum: ['pendiente', 'en proceso', 'resuelto'],
    default: 'pendiente',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Incident', IncidentSchema);