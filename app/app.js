var app     = require('express')();
var routes  = require('./routes/resources');

app.use('/', routes);

module.exports = app;
