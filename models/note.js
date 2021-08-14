module.exports = function(sequelize, DataTypes) {
  var Notes = sequelize.define("notes", {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  })
}