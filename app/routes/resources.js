var express    = require('express'),
    store      = require('../store'),
    serializer = require('../serializers/serializer'),
    router     = express.Router();

router.route('/:resource')

  .get(function (req, res, next) {
    var resource = req.params.resource,
        objects  = store.getAll(resource);
   
    res.json(serializer.serialize(resource, objects));
  })

  .post(function (req, res, next) {
    var resource = req.params.resource;
    
    store.create(resource, serializer.deserialize(resource, req.body));

    res.status(201).json(req.body);
  });

router.route('/:resource/:id')

  .get(function (req, res, next) {
    var resource = req.params.resource,
        id       = req.params.id,
        object   = store.get(resource, id);

    res.json(serializer.serialize(resource, object));
  });

module.exports = router;
