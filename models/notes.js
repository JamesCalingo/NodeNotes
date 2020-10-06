module.exports - function(sequelize, DataTypes){
  var Notes = sequelize.define('notes', {
   title: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       len: [1]
     }
   },
   body: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
   }
  })
  Notes.associate = function (models) {
    Notes.belongsTo(models.users)
  }
  return Notes
}

