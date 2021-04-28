module.exports = (sequelize, Sequelize) => {

    // userId, gradeId, institutionId, subjectId should be included in req.body

  const schema = {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  }
  const Model = sequelize.define("teacher", schema);
  return Model;
};