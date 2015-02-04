var app        = require('express')(),
    routes     = require('./routes/resources'),
    bodyParser = require('body-parser');

// Setup required middleware
app.use(bodyParser.json());

// Setup resource routes
app.use('/', routes);

module.exports = app;
