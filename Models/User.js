module.exports = (sequelize, Sequelize) => {

  const userSchema = {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  }

  const User = sequelize.define("users", userSchema);

  /*
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  });
  */

  return User;
};
