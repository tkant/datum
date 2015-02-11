var serializers = {
  default: require('./serializers/default'),
  ember_rest: require('./serializers/ember_rest')
};

var serializer = function (del) {

  var delegate = serializers[del] || serializers.default;

  return {
    serialize: function (name, object) {
      return delegate.serialize(name, object);
    },

    deserialize: function (name, object) {
      return delegate.deserialize(name, object);
    }
  }
};

module.exports = serializer;
