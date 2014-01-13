var sfs = require('sfs');
var config = require('./config');

sfs.start(config.sfsConfig);

console.log('simple file system worker start!');
