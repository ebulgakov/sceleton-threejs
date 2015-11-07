'use strict';
window.THREE = require('three.js');
window.TWEEN = require('tween.js');
require('./functions/animate')();


(function (container) {
	if (!document.getElementById(container)) return false;

	var parameters = require('./functions/init')(container);
	parameters.camera.position.z = 1200;

	require('./functions/orbit_controls')(parameters);

	require('./models/intro')(parameters);
})('introTHREE');



