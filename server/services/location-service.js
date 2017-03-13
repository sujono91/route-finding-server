const location = require('../models').location;

module.exports = {
  create(req, res) {
    return location.create({
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      address: req.body.address
    });
  },

  view(req, res) {
    return location.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });
  },

  retrieve(req, res) {
    return location
      .findById(req.params.id);
  },

  delete(location) {
    return location
      .destroy();
  }
};