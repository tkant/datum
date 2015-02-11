var express    = require('express'),
    store      = require('../store'),
    serializer = require('../serializer_delegate'),
    router     = express.Router();

router.route('/:resource')

  .get(function (req, res, next) {
    var resource = req.params.resource,
        objects  = store.getAll(resource);

    res.json(serializer(res.locals.serializer).serialize(resource, objects));
  })

  .post(function (req, res, next) {
    var resource = req.params.resource;

    store.create(resource, serializer(res.locals.serializer).deserialize(resource, req.body));

    res.status(201).json(req.body);
  });

router.route('/:resource/:id')

  .get(function (req, res, next) {
    var resource = req.params.resource,
        id       = req.params.id,
        object   = store.get(resource, id);

    res.json(serializer(res.locals.serializer).serialize(resource, object));
  })

  .put(function (req, res, next) {
    var resource = req.params.resource,
        id       = req.params.id,
        s        = serializer(res.locals.serializer)

        // Update the incoming object
        object = store.update(resource, id, s.deserialize(resource, req.body));

    res.json(s.serialize(resource, object));
  })

  .delete(function (req, res, next) {
    var resource = req.params.resource,
        id       = req.params.id,
        s        = serializer(res.locals.serializer)

    store.delete(resource, id);

    res.status(204).end();
    
  });

module.exports = router;
