'use strict';
require('../libs/OrbitControls');

module.exports = function (parameters) {
  var oControls;

  var container = document.getElementById(parameters.config.container);
  oControls = new THREE.OrbitControls( parameters.camera, container );

  return oControls;
};
