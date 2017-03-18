/** @class LocationModel
 * @property {float}  latitude latitude value
 * @property {float}  longitude longitude value
 * @property {string}  address address based on geolocation of latitude and longitude
*/

module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return location;
};