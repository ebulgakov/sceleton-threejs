'use strict';
var actions = require('../actions_config');
var config = require('../config')();

module.exports = function (container) {
  config.container = container;

  var mainScene = require('./scene')();
  var renderer = require('./renderer')(config);
  var camera = require('./camera')(mainScene, config);

  var parameters = {
    renderer: renderer,
    camera: camera,
    scene: mainScene,
    config: config
  };

  actions.renders.push(parameters);

  return parameters;
};