export default function (scene, config) {
  const camera = new THREE.PerspectiveCamera(config.lookCamera, config.size.width/config.size.height, 1, 10000);
  camera.position.z = config.size.height;

  const ambiColor = 0xffffff;
  const ambientLight = new THREE.AmbientLight(ambiColor);
  scene.add(ambientLight);

  var light = new THREE.SpotLight( 0xffffff, .5);
  light.position.set(0, 0, 1000);
  light.castShadow = true;
  light.angle = 1.5;
  light.shadow.bias = 1000;
  light.shadow.darkness = 100;
  scene.add( light );

  return camera;
};
