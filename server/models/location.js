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