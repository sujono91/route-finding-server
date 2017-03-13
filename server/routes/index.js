const locationController = require('../controllers').locationController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/locations', locationController.createLocation);
  app.get('/api/locations', locationController.viewLocation);
  app.get('/api/locations/:id', locationController.findLocation);
  app.delete('/api/locations/:id', locationController.removeLocation);
};