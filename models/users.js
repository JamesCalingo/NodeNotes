var bcrypt = require('bcrypt')

module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      match: [/.+@.+\../, 'A valid email address must be used!']
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  })
}