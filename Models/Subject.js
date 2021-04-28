module.exports = (sequelize, Sequelize) => {

  const schema = {
    name: {
      type: Sequelize.STRING
    }
  }
  const Model = sequelize.define("subject", schema);
  return Model;
};