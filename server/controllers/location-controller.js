/** @class LocationController */

const location = require('../models').location;
const locationService = require('../services').locationService;
const HTTP_STATUS_CODE = require('../constant').HTTP_STATUS_CODE;
const helper = require('../helper');

module.exports = {

  /**
  * Call LocationService Create Method and send the HTTP response with status
  * @memberof LocationController
  * @function createLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  createLocation: (req, res) => {
    return locationService.create(req, res)
      .then((location) => res.status(HTTP_STATUS_CODE.CREATED).send(location))
      .catch((error) => helper.sendError(res, error));
  },

  /**
  * Call LocationService View Method and send the HTTP response with status
  * @memberof LocationController
  * @function viewLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  viewLocation: (req, res) => {
    return locationService.view(req, res)
      .then((location) => res.status(HTTP_STATUS_CODE.OK).send(location))
      .catch((error) => helper.sendError(res, error));
  },

  /**
  * Call LocationService Retrieve Method and send the HTTP response with status
  * @memberof LocationController
  * @function findLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  findLocation: (req, res) => {
    return locationService.retrieve(req, res)
      .then((location) => {
        if (!location) {
          return helper.validateNotFound(res);
        }
        return res.status(HTTP_STATUS_CODE.OK).send(location);
      })
      .catch((error) => helper.sendError(res, error));
  },

  /**
  * Call LocationService Retrieve and Delete Method and send the HTTP response with status
  * @memberof LocationController
  * @function removeLocation
  * @param req {Object} Request
  * @param res {Object} Response
  */
  removeLocation: (req, res) => {
    return locationService.retrieve(req, res)
      .then((location) => {
        if (!location) {
          return helper.validateNotFound(res);
        }
        return locationService.delete(location)
          .then(() => res.status(HTTP_STATUS_CODE.NO_CONTENT).send())
          .catch((error) => sendError(res));
      })
      .catch((error) => helper.sendError(res, error));
  }
};