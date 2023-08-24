export default function (scene, config) {
  var camera;

  camera = new THREE.PerspectiveCamera(config.lookCamera, config.size.width/config.size.height, 1, 10000);
  camera.position.z = config.size.height;

  var ambiColor = 0xffffff;
  var ambientLight = new THREE.AmbientLight(ambiColor);
  scene.add(ambientLight);

  var light = new THREE.SpotLight( 0xffffff, .5);
  light.position.set(0, 0, 1000);
  light.castShadow = true;
  light.angle = 1.5;
  light.shadow.bias = 1000;
  light.shadow.darkness = 100;
  //scene.add( light );

  return camera;
};
