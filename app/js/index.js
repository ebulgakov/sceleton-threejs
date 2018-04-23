'use strict';
import render from  './functions/animate';
render();

(function (container) {
	if (!document.getElementById(container)) return false;

	var parameters = require('./functions/init')(container);
	parameters.camera.position.z = 1200;

	require('./functions/orbit_controls')(parameters);

	require('./models/demo')(parameters);
	require('./models/box')(parameters);
})('ThreeJSContainer');



