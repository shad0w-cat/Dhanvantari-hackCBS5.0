const db = require("../models");
const appointments = require("../models/appointments");

const users = db.appointments;

exports.create = (res, data) => {
  appointments
    .create({
      patientName: data.patientName,
      appType: "UPCOMING",
      doctorName: data.doctorName,
      appDate: data.appDate,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        Message:
          err.message || "Some errors occurred when creating a new appointment",
      });
    });
};
exports.find = (res, data) => {
  appointments
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
