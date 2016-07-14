/*global require,module*/
var auth = require('./auth'),
    UserController = require('../controllers/user.controller'),
    Config = require('../config/config').constant,
    mongoose = require('mongoose');
module.exports = function (app) {
    'use strict';
    // REST ENDPOINTS
    app.post('/register', auth.register);
    app.post('/login', auth.login);
    app.post('/islogedin', auth.isLogedIn);
    app.get('/logout/:userId', auth.logout);
    app.get('/getusersbyid/:userId', UserController.getUsersByID);
    app.get('*', function (req, res) {
        res.sendfile('./dist/index.html');
    });
};