'use strict';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function (parameters) {
  var oControls;

  var container = document.getElementById(parameters.config.container);
  oControls = new OrbitControls( parameters.camera, container );

  return oControls;
};
