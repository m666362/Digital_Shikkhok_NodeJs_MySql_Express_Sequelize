const db = require("../Models");
const status = require("../Utils/statusCode")
const Model = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, callback) => {
  const { title, description, published = false } = req.body;
  const item = { title, description, published };
  Model.create(item)
    .then((data) => {
      callback(status.Success.OK.code, data, null);
    })
    .catch((error) => {
      callback(status.Error.BadRequest.code, null, error);
    });
};

// Get one Tutorial by id
exports.findOne = (phone_number, callback) => {
  Model.findOne({
    where: {
      phone_number: phone_number,
    },
  })
    .then((data) => {
      callback(200, data, null);
    })
    .catch((error) => {
      callback(400, null, error);
    });
};

// Get one and update
exports.findOne = (id, updates, callback) => {
  Project.find({ where: { title: "aProject" } }).on("success", function (item) {
    // Check if record exists in db
    if (item) {
      item.update(updates).success(function () {});
    }
  });

  Model.find({ where: { id: id } }).on("success", (item) => {
    if (item) {
      item.update(updates);
    }
  });
};

// Get all Tutorial
exports.getAllData = (callback) => {
  Model.findAll({})
    .then((data) => {
      callback(200, data, null);
    })
    .catch((error) => {
      callback(400, null, error);
    });
};

// Delete Tutorial
exports.deleteOne = (id, callback) => {
  Model.destroy({
    where: {
      id: id,
    },
  })
    .then((data) => {
      callback(200, data, null);
    })
    .catch((error) => {
      callback(400, null, error);
    });
};

// Find all
