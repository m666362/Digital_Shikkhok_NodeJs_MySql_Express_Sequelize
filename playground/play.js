const config = require("../Config/dbConfig");

const Sequelize = require("sequelize");

const {DB, USER, PASSWORD, HOST, dialect} = config;
const {max, min, acquire, idle} = config.pool;

console.log(max, min, acquire, idle);
console.log(DB, USER, PASSWORD, HOST, dialect);


const sequelize = new Sequelize(
  DB,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: dialect,
    operatorsAliases: false,

    pool: {
      max: max,
      min: min,
      acquire: acquire,
      idle: idle
    }
  }
);
/*
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;

*/
