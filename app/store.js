var fixtures = process.env.FIXTURES || 'fixtures',
    fs       = require('fs');

var store = {
  getAll: function (resource) {
    var path = fixtures + '/' + resource,
        objects = [];
    
    try {
      var files = fs.readdirSync(fixtures + '/' + resource);

      files.forEach(function (file) {
        objects.push(require(process.cwd() + '/' + path + '/' + file));
      });
    } catch (error) {
      console.error("Unable to find fixtures for resource:", resource);
    }

    return objects;
  },

  get: function (resource, id) {},
  create: function (resource, obj) {}
};

 module.exports = store;
