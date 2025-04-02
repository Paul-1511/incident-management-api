exports.validateIncident = (req, res, next) => {
    const { reporter, description } = req.body;
  
    if (!reporter) {
      return res.status(400).json({ error: 'El reportero es obligatorio' });
    }
  
    if (!description || description.length < 10) {
      return res.status(400).json({ 
        error: 'La descripción debe tener al menos 10 caracteres' 
      });
    }
  
    next(); // Pasar al controlador si todo está bien
  };