const dbConfig = require("../config/dbConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./Tutorial")(sequelize, Sequelize);
db.users = require("./User")(sequelize, Sequelize);

db.students = require("./Student")(sequelize, Sequelize);
db.teachers = require("./Teacher")(sequelize, Sequelize);
db.institutions = require("./Institution")(sequelize, Sequelize);
db.grade_levels = require("./GradeLevel")(sequelize, Sequelize);
db.subjects = require("./Subject")(sequelize, Sequelize);
db.questions = require("./Question")(sequelize, Sequelize);
db.answers = require("./Answer")(sequelize, Sequelize);

// todo: configure Tutorial
db.users.hasMany(db.tutorials, { as: "tutorials" });
db.tutorials.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});

// **********todo: configure Student*********
// student-user
db.users.hasMany(db.students, { as: "students" });
db.students.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});

// student-grade_levels
db.grade_levels.hasMany(db.students, { as: "students" });
db.students.belongsTo(db.grade_levels, {
  foreignKey: "gradeLevelId",
  as: "grade_level",
});

// student-institutions
db.institutions.hasMany(db.students, { as: "students" });
db.students.belongsTo(db.institutions, {
  foreignKey: "institutionId",
  as: "institution",
});

// todo: configure Tutorial

// todo: configure Question

// todo: configure Answer

module.exports = db;
