module.exports = (sequelize, Sequelize) => {

  const schema = {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  }
  const Model = sequelize.define("institution", schema);
  return Model;
};