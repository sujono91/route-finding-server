/** @class LocationService */

const location = require('../models').location;

module.exports = {

  /**
  * Call location Create Method
  * @memberof LocationService
  * @function createLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  create(req, res) {
    return location.create({
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      address: req.body.address
    });
  },

  /**
  * Call location findAll Method with asc order of createdAt 
  * @memberof LocationService
  * @function createLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  view(req, res) {
    return location.findAll({
      order: [
        ['createdAt', 'ASC'],
      ],
    });
  },

  /**
  * Call location findById Method
  * @memberof LocationService
  * @function createLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  retrieve(req, res) {
    return location
      .findById(req.params.id);
  },

  /**
  * Call location destroy Method
  * @memberof LocationService
  * @function createLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  delete(location) {
    return location
      .destroy();
  }
};