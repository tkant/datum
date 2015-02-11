var app        = require('express')(),
    routes     = require('./routes/resources'),
    bodyParser = require('body-parser');

var datum = function (options) {

  // Setup required middleware
  app.use(bodyParser.json());
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });

  // Middleware for allowing CLI application variables to be passed to responses
  app.use(function (req, res, next) {
    for (var property in options) {
      if (options.hasOwnProperty(property)) {
        res.locals[property] = options[property];
      }
    }

    next();
  });

  // Setup resource routes
  app.use('/', routes);

  return app;

};

module.exports = datum;
