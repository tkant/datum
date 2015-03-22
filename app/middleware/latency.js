module.exports = function (req, res, next) {

  if (typeof res.locals.latency !== 'undefined') {
    var latency = parseLatency(res.locals.latency);
    if (latency instanceof Array) {
      var sleep = Math.floor(Math.random() * (latency[1] - latency[0] + 1)) + latency[0];
      return setTimeout(next, sleep);
    }

    return setTimeout(next, latency);
  }

  next();
};

var parseLatency = function (latency) {
  if (latency !== null && latency.match(/\.\./) !== null) {
    latency = latency.split('..')
    return [parseInt(latency[0]), parseInt(latency[1])];
  }

  return parseInt(latency);
};
