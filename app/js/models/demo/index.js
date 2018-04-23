var actions = require('../../functions/actions')();

module.exports = function(parameters) {
  var scene = parameters.scene;
  var config = parameters.config;

  var geometry = new THREE.BoxGeometry( 100, 100, 100 );
  var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  var cube = new THREE.Mesh( geometry, material );
  scene.add(cube);
};
