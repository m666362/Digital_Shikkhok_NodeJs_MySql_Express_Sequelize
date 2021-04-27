module.exports = (sequelize, Sequelize) => {

  const userSchema = {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone_number: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  }

  const User = sequelize.define("users", userSchema);

  return User;
};
