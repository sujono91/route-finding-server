/** @name Application Routing */

const locationController = require('../controllers').locationController;
const PATH = require('../constant').PATH;

module.exports = (app) => {
  app.get(PATH.API, (req, res) => res.status(200).send({
    message: 'Welcome to the Find Route API!'
  }));

  app.post(`${PATH.API}${PATH.LOCATIONS}`, locationController.createLocation);
  app.get(`${PATH.API}${PATH.LOCATIONS}`, locationController.viewLocation);
  app.get(`${PATH.API}${PATH.LOCATIONS}/:id`, locationController.findLocation);
  app.delete(`${PATH.API}${PATH.LOCATIONS}/:id`, locationController.removeLocation);
};