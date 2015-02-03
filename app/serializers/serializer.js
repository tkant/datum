var pluralize = require('pluralize');

var serializer = {
  serialize: function (name, objects) {
    var obj   = {};
    
    obj[name] = objects;

    return obj;
  }
};

module.exports = serializer;
