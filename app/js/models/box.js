'use strict';

var config = require('../config');

module.exports = function (scene) {
  var helper;

  helper = new THREE.BoxHelper( new THREE.Mesh( new THREE.BoxGeometry( config.size.width, config.size.height, config.size.width ) ) );
  helper.material.color.setHex( 0xff0000 );
  helper.material.transparent = true;
  //helper.position.x = config.size.width / 2;


  scene.add( helper );

  return helper;
};
