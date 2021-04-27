module.exports = (sequelize, Sequelize) => {

  const schema = {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  }
  const Tutorial = sequelize.define("tutorial", schema);
  return Tutorial;
};