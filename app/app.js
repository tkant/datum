var app        = require('express')(),
    routes     = require('./routes/resources'),
    bodyParser = require('body-parser');

// Setup required middleware
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

// Setup resource routes
app.use('/', routes);

module.exports = app;
