import * as THREE from 'three';
import orbitControls from './functions/orbit_controls';
import initialParameters from './functions/init';
import "./functions/animate";
import box from "./models/box";

(function (container) {
	window.THREE = THREE;

	if (!document.getElementById(container)) return false;

	const parameters = initialParameters(container);
	orbitControls(parameters);
	box(parameters);

	// require('./models/intro')(parameters);
})('js-intro-three');
