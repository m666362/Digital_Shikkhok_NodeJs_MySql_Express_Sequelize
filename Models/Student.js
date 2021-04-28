module.exports = (sequelize, Sequelize) => {

    // userId, gradeId, institutionId should be included in req.body

  const schema = {
    roll_number: {
      type: Sequelize.STRING
    },
  }
  const Model = sequelize.define("student", schema);
  return Model;
};