/*jslint nomen: true,es5: true*/
/*global require,process,__dirname, console*/
var express = require('express');

var env = 'production';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/mongoose')(config);

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');