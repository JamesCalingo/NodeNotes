var bcrypt = require('bcrypt')

module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
        unique: true,
      match: [/.+@.+\../, 'A valid email address must be used!']
      }
    }
  })


Users.prototype.validPassword = function (password) {
  const document = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, document.password, function compare (err, same) {
      if (err){
        console.log(err)
        reject(err)
      }else {
        console.log(same)
        resolve(same)
      }
    })
  })
}

Users.beforeCreate(function (users) {
  users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null)
})

Users.associate = function(models) {
  Users.hasMany(models.Notes)
}

return Users
}