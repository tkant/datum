var pluralize = require('pluralize');

var serializer = {

  serialize: function (name, object) {
    var obj = {};
    if (Object.prototype.toString.call(object) !== '[object Array]') {
      name = pluralize.singular(name);
    }
    obj[name] = object;

    return obj;
  },

  deserialize: function (name, object) {
    if (Object.prototype.toString.call(object) !== '[object Array]') {
      name = pluralize.singular(name);
    }

    return object[name];
  }
};

module.exports = serializer;
