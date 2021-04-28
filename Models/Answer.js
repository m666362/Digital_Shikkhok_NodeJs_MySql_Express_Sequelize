module.exports = (sequelize, Sequelize) => {

    // userId should be included in req.body

  const schema = {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  }
  const Model = sequelize.define("answer", schema);
  return Model;
};