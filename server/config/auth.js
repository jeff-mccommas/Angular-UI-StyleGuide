/*global require, exports*/
var encryptUtility = require('../utilities/encryption.utility'),
    UserModel = require('mongoose').model('User'),
    uid = require('rand-token').uid,
    Config = require('../config/config').constant,
    q = require('q'),
    tokenLoginStrategy,
    authToken;

authToken = function (userid, token) {
    'use strict';
    var defer = q.defer();
    UserModel.findOne({
        '_id': userid,
        'token': token
    }, function (err, user) {
        if (err) {
            return defer.resolve({
                success: false
            });
        }
        if (user) {
            return defer.resolve({
                success: true,
                userdata: user
            });
        } else {
            return defer.resolve({
                success: false
            });
        }
    });
    return defer.promise;
};
tokenLoginStrategy = function (req, res) {
    'use strict';
    var userData = req.body;
    UserModel.findOne({
        'email': userData.email
    }, function (err, user) {
        if (err) {
            //Error occured
            res.status(500).send({
                success: false
            });
        }
        if (user) {
            // if the user is found and the password is correct
            if (encryptUtility.compareSync(userData.password, user.password)) {
                if (!user.token) {
                    user.token = uid(32); // If user token is not yet assigned then assign new token
                }
                res.status(200).send({
                    success: true,
                    user: user
                });
            } else {
                //Unauthorized : Password does not match
                res.status(200).send({
                    success: false,
                    message: "Invalid email/password."
                });
            }
        } else {
            //Unauthorized : User with email not found
            res.status(200).send({
                message: "Not registerd",
                code: "401",
                success: false
            });
        }
    });
};
exports.login = function (req, res) {
    'use strict';
    var userData = req.body; 
    if (userData) {
        tokenLoginStrategy(req, res);
    } else {
        res.status(500).send({
            success: false
        });
    }
};
exports.logout = function (req, res) {
    'use strict';
    UserModel.update({
        "_id": req.param.userId
    }, {
        $set: {
            "token": null
        }
    }, function (err) {
        if (!err) {
            res.status(200).send({
                success: true
            });
        } else {
            res.status(500).send({
                success: false
            });
        }

    });
};
exports.isLogedIn = function (req, res) {
    'use strict';
    var userCred = req.body;
    authToken(userCred.userId, userCred.token).then(function (authResponse) {
        if (authResponse.success) {
            res.status(200).send({
                success: true,
                user: authResponse.userdata
            });
        } else {
            res.status(200).send({
                success: false
            });
        }
    });
};
exports.register = function (req, res) {
    'use strict';
    var userData = req.body;
    UserModel.findOne({
        'email': userData.email
    }, function (err, user) {
        if (err) {
            res.sendStatus(500);
        }
        // check to see if theres already a user with that email
        if (user) {
            res.status(200).send({
                success: false,
                message: "User email already exist."
            });
        } else {
            // if there is no user with that email
            // create the user
            var newUser = new UserModel(userData);
            newUser.token = uid(32); //assigning auth token
            newUser.password = encryptUtility.hashPwd(userData.password); // Encrypting password
            newUser.save(function (err, userDoc) {
                if (err) {
                    res.status(500).send({
                        success: false,
                        message: err.message
                    });
                }
                res.status(200).send({
                    success: true,
                    user: userDoc
                });
            });
        }
    });
};