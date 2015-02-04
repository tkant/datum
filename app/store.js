var fixtures = process.env.FIXTURES || 'fixtures',
    mkdirp   = require('mkdirp'),
    fs       = require('fs');

var store = {
  getAll: function (resource) {
    var path = fixtures + '/' + resource,
        objects = [];
    makeDir(path);
    
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

  create: function (resource, obj) {
    var path = fixtures + '/' + resource,
        id = getNextId(resource);

    // Set the id on the object
    obj.id = id;
    
    // Make the directory if it doesn't exist
    makeDir(path);
    fs.writeFile(path + '/' + id + '.json', JSON.stringify(obj), function (err) {
      if (err) {
        return console.error("Unable to write fixture for resource:", resource);
      }
    });
  }
};

var makeDir = function (path) {
  mkdirp(path, function (err) {
    if (err) {
      console.error("Unable to create directory:", err);
    }
  });
};

var getNextId = function (resource) {
  var files = fs.readdirSync(fixtures + '/' + resource);
  return (files.length === 0) ? 1 : files.length + 1;
};

module.exports = store;
