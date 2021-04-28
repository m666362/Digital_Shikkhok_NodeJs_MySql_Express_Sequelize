module.exports = (sequelize, Sequelize) => {

  const schema = {
    name: {
      type: Sequelize.STRING
    },
  }
  const Model = sequelize.define("grade_level", schema);
  return Model;
};