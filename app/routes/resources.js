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
    
    store.create(resource, req.body);

    res.status(201).json(req.body);
  });

module.exports = router;
