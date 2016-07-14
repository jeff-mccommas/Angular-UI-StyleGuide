/*jslint nomen: true*/
/*global require,exports*/
var UserModel = require('mongoose').model('User');

exports.getUsersByID = function (req, res) {
    'use strict';
    UserModel.findOne({
        "_id": req.params.userId
    }).exec(function (err, userCollection) {
        if (!err) {
            res.send({
                success: true,
                user: userCollection
            });
        } else {
            res.send({
                success: false,
                message: err.message
            });
        }
    });
};