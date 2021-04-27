const db = require("../Models");
const status = require("../Utils/statusCode");
const Model = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, callback) => {
  console.log("req.body = ", req.body);
  const {
    first_name,
    last_name,
    full_name,
    email,
    phone_number,
    password,
    type,
    status,
    token,
  } = req.body;

  const item = {
    first_name,
    last_name,
    full_name,
    email,
    phone_number,
    password,
    type,
    status,
    token,
  };
  console.log("item = ", item);
  Model.create(item)
    .then((data) => {
      callback(200, data, null);
    })
    .catch((error) => {
      callback(400, null, error);
    });
};

// Get one User by id
exports.findOne = (id, callback) => {
  Model.findByPk(id)
    .then((data) => {
      callback(status.Success.OK.code, data, null);
    })
    .catch((error) => {
      callback(status.Error.BadRequest.code, null, error);
    });
};

// Get one by id and update
exports.updateOne = (id, updates, callback) => {
  Model.update(updates, {
    where: {
      id: id,
    },
  })
    .then((data) => {
      callback(status.Success.OK.code, data, null);
    })
    .catch((error) => {
      callback(status.Error.BadRequest.code, null, error);
    });
};

// Get many by attribute and update many
exports.updateMany = (attributes, updates, callback) => {
  Model.update(updates, {
    where: attributes,
  })
    .then((data) => {
      callback(status.Success.OK.code, data, null);
    })
    .catch((error) => {
      callback(status.Error.BadRequest.code, null, error);
    });
};

// Get all User
exports.getAllData = (callback) => {
  Model.findAll({})
    .then((data) => {
      callback(status.Success.OK.code, data, null);
    })
    .catch((error) => {
      callback(status.Error.BadRequest.code, null, error);
    });
};

// Delete User
exports.deleteOne = (id, callback) => {
  Model.destroy({
    where: {
      id: id,
    },
  })
    .then((data) => {
      callback(status.Success.OK.code, data, null);
    })
    .catch((error) => {
      callback(status.Error.BadRequest.code, null, error);
    });
};

// Delete all User
exports.deleteAll = (callback) => {
  Model.destroy({
    where: {},
    truncate: true,
  })
    .then((data) => {
      callback(status.Success.OK.code, data, null);
    })
    .catch((error) => {
      callback(status.Error.BadRequest.code, null, error);
    });
};
