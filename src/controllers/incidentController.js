const Incident = require('../models/Incident');

exports.createIncident = async (req, res) => {
  try {
    const incident = new Incident(req.body);
    await incident.save();
    res.status(201).json(incident);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ created_at: -1 });
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener incidentes' });
  }
};

exports.getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incidente no encontrado' });
    }
    res.json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el incidente' });
  }
};

exports.updateIncidentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowedStatus = ['pendiente', 'en proceso', 'resuelto'];

    if (!status || !allowedStatus.includes(status)) {
      return res.status(400).json({ error: 'Estado no válido' });
    }

    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!incident) {
      return res.status(404).json({ error: 'Incidente no encontrado' });
    }

    res.json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
};

exports.deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incidente no encontrado' });
    }
    res.json({ message: 'Incidente eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
};