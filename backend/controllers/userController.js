const db = require('../models');

const users = db.users;

exports.create = (res, data) => {
    users.create({
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        mobileNumber: data.mobileNumber,
        aadhaarNumber: data.aadhaarNumber,
        emailAddress: data.emailAddress,
        password: data.password,
        bloodGroup: data.bloodGroup,
        userType: data.userType
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            Message:
                err.message || 'Some errors occurred when creating a user'
        });
    });
};

exports.find = (res, data) => {
    users.findAll({
        where: { mobileNumber: data.mobileNumber }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            Message:
                err.message || 'Error occurred while recovering user'
        });
    });
}