const location = require('../models').location;
const locationService = require('../services').locationService;
const HTTP_STATUS_CODE = require('../constant').HTTP_STATUS_CODE;
const helper = require('../helper');

module.exports = {

  createLocation: (req, res) => {
    return locationService.create(req, res)
      .then((location) => res.status(HTTP_STATUS_CODE.CREATED).send(location))
      .catch((error) => helper.sendError(res, error));
  },

  viewLocation: (req, res) => {
    return locationService.view(req, res)
      .then((location) => res.status(HTTP_STATUS_CODE.OK).send(location))
      .catch((error) => helper.sendError(res, error));
  },

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