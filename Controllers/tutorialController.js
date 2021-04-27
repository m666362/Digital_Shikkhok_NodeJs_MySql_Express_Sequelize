const db = require("../Models");
const Model = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, callback) =>{
  const {title, description, published=false} = req.body;
  const item = {title, description, published};
  Model.create(item)
      .then((data)=>{
        callback(200, data, null);
      }).catch((error)=>{
        callback(400, null, error);
      })
}

// Create and Save a new Tutorial
exports.getAllData = (callback)=> {
  Model.findAll({}).then((data)=>{
    callback(200, data, null);
  }).catch((error)=>{
    callback(400, null, error);
  })
}

// Delete Tutorial
exports.deleteOne = (id, callback)=> {
  Model.destroy({
    where: {
      id: id
    }
  }).then((data)=>{
    callback(200, data, null);
  }).catch((error)=>{
    callback(400, null, error);
  })
}


// Find all
