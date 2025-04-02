const express = require('express');
const router = express.Router();
const { validateIncident } = require('./middlewares/validateIncident');
const {
  createIncident,
  getAllIncidents,
  getIncidentById,
  updateIncidentStatus,
  deleteIncident,
} = require('./controllers/incidentController');

router.post('/incidents', validateIncident, createIncident);
router.get('/incidents', getAllIncidents);
router.get('/incidents/:id', getIncidentById);
router.put('/incidents/:id', updateIncidentStatus);
router.delete('/incidents/:id', deleteIncident);

module.exports = router;