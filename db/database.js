const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "nodenoteDB",
  "NODENOTE_DB",
  process.env.password,
  {
    dialect: "mysql",
    host: localhost,
  }
);
module.exports = sequelize
