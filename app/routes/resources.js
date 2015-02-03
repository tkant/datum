var express    = require('express'),
    store      = require('../store'),
    serializer = require('../serializers/serializer'),
    router     = express.Router();

router.get('/:resource', function (req, res, next) {
  var resource = req.params.resource,
      objects  = store.getAll(resource);
   
  res.json(serializer.serialize(resource, objects));
});



module.exports = router;
