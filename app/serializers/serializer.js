var pluralize = require('pluralize');

var serializer = {
  serialize: function (name, objects) {
    var obj = {};
    
    obj[name] = objects;

    return obj;
  },

  serializeObject: function (name, object) {
    var obj = {};

    obj[pluralize.singular(name)] = object;

    return obj;
  }
};

module.exports = serializer;
