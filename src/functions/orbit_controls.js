'use strict';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function (parameters) {
  const container = document.getElementById(parameters.config.container);

  return new OrbitControls( parameters.camera, container );
};
