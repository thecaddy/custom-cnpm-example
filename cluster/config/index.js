var fs = require('fs');
var path =require('path');

fs.existsSync = fs.existsSync || path.existsSync;
var root = __dirname;

var config = {
  enableCluster: true
};

// load config/config.js, everything in config.js will cover the same key in index.js
// you can put production config in config/config.js
var customConfig = path.join(root, 'config/config.js');
if (fs.existsSync(customConfig)) {
  var options = require(customConfig);
  for (var k in options) {
    config[k] = options[k];
  }
}

module.exports = config;
