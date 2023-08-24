'use strict';
export default function (config) {
 var container, renderer;

  container = document.getElementById(config.container);
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    transparent: true,
    alpha: true
  });

  config.size = {
  	width: container.offsetWidth,
  	height: container.offsetHeight
  };


  renderer.setSize(container.offsetWidth, container.offsetHeight);

  renderer.setClearColor( 0xffffff );
  renderer.setPixelRatio( window.devicePixelRatio );


  container.appendChild(renderer.domElement);

  return renderer;
};
