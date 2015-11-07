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

  stats.begin();
  actions.run();
  stats.end();

};
