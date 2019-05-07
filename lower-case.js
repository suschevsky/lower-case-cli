#!/usr/bin/env node
var program = require('commander');
var lowerCase = require('lower-case');

try {
  program.parse(process.argv);
  var output = lowerCase(program.args.join(' '));
  process.stdout.write(output);
} catch (e) {
  throw e;
}
