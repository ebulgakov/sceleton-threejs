'use strict';

var stats = require('./stats')();
var actions = require('./actions')();
var actionsConfig = require('../actions_config');

module.exports = function render () {
  requestAnimationFrame(function () {
  	render();
  });
  actionsConfig.renders.forEach(function (object) {
  	object.renderer.render(object.scene, object.camera);
  });

  if (stats) stats.begin();
  actions.run();
  if (stats) stats.end();
};
