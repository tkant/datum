var app        = require('express')(),
    routes     = require('./routes/resources'),
    cors       = require('./middleware/cors'),
    latency    = require('./middleware/latency'),
    bodyParser = require('body-parser');

var datum = function (options) {

  // Setup required middleware
  app.use(function (req, res, next) {
    for (var property in options) {
      if (options.hasOwnProperty(property)) {
        res.locals[property] = options[property];
      }
    }

    next();
  });
  app.use(bodyParser.json());
  app.use(cors);
  app.use(latency);

  // Setup resource routes
  app.use('/', routes);

  return app;

};

module.exports = datum;
