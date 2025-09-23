'use strict';

var Compiler = require('./compiler');
var AST = require('./ast.js');
var utils = require('./utils');

var jsonToSchema = function(json, fileConfig) {
  var compiler = new Compiler();
  var ast = new AST();
  ast.build(json);
  compiler.compile(ast.tree, fileConfig);
  return compiler.schema;
};

module.exports = jsonToSchema;
