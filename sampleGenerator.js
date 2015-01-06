'use strict';

var args = process.argv.slice(2);
var name = args[0];
var size = parseInt(args[1], 10);

var numberGenerator = function () {
  return Math.floor(Math.random() * 7000000);
};

var generateSample = function (name, size) {
  var
    fs = require('fs'),
    stream = fs.createWriteStream(name);

  stream.once('open', function (fd) {
    console.log('Generating ' + name);
    var buffer = '';
    for (var i = 0; i < size; i++) {
      buffer += numberGenerator() + "\n";
    };
    console.log("end buffering");

    stream.write(buffer);
    stream.end();
  });
};

var smallSizes =
  [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000];
var largeSizes =
  [2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000
  ,11000000, 12000000, 13000000, 14000000, 15000000, 16000000, 17000000, 18000000, 19000000, 20000000]

for (var i = 0; i < smallSizes.length; i++) {
  var size = smallSizes[i];
  generateSample('samples/small-' + size + '.txt', size);
};

for (var i = 0; i < largeSizes.length; i++) {
  var size = largeSizes[i];
  generateSample('samples/large-' + size + '.txt', size);
};
