/*jslint nomen: true*/
/*globals require, exports, __dirname,module, process*/
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/styleguide',
        rootPath: rootPath,
        port: process.env.PORT || 8181
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin_jeff:wewillrockyou@ds025792.mlab.com:25792/styleguide',
        port: process.env.PORT || 8181
    },
    constant: {}
};