const db = require("../models");
const prescription = require("../models/prescription");
const appointments = require("../models/appointments");

const prescription = db.prescription;

exports.find = (res, data) => {
  prescription
    .findAll({
      where: { userId: data.userId },
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        Message: err.message || "Error occurred while recovering appointments",
      });
    });
};
