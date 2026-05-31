const dbConfig = require("../config/dbConfig.js");
const { database, user, password, host, port, dialect, pool } = dbConfig;
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect,
  pool,
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;
db.art = require("./artModel.js")(sequelize, DataTypes);
db.user = require("./userModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { sequelize, db };
