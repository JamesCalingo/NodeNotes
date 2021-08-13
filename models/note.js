const { Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize("mysql::memory:")
 
  const Note = sequelize.define("Note", {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  })

  console.log(Note === sequelize.models.Note)
