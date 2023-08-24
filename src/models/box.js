import initControl from '../functions/datgui';

export default function (parameters) {
  var helper;
  var scene = parameters.scene;
  var size = parameters.config.size;
  var gControl = initControl('Helper');

  var options = {
    visible: false,
    position: {
      x: 0,
      y: 0,
      z: 0
    }
  };
  helper = new THREE.BoxHelper( new THREE.Mesh( new THREE.BoxGeometry( size.width, size.height, size.width ) ) );
  helper.material.color.setHex( 0xff0000 );
  helper.material.transparent = true;

  new gControl(options, helper, 'visible');
  new gControl(options.position, helper.position, ['x', 'y', 'z'], 100);


  scene.add( helper );

  return helper;
};
