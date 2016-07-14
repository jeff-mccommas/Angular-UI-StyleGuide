/*global require,module,console*/
var mongoose = require('mongoose'),
    userModel = require('../models/user.model');
module.exports = function (config) {
    'use strict';
    mongoose.connect(config.db); 
    var db = mongoose.connection; 
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('MongoDB : StyleGuide connection opened :' + config.db);
    });
};