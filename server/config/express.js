/*global require,module,process, console*/
var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    flash = require('connect-flash'),
    compression = require('compression');

//Catching uncaught exceptions
process.on('uncaughtException', function (err) {
    'use strict';
    console.log(err.message, err.stack);
});
module.exports = function (app, config) {
    'use strict';
    // compress all requests
    app.use(compression());
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Accept-Encoding', "gzip, deflate, sdch");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        if ('OPTIONS' === req.method) {
            res.send(200);
        } else {
            next();
        }
    });
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.static(config.rootPath + '/dist'));
    app.use(bodyParser.json());
};