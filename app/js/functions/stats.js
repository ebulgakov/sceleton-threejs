'use strict';
var config = require('../config')();


module.exports = function () {
	var debug = typeof Stats != 'undefined' && config.debug == true;

	if (typeof Stats == 'undefined' && config.debug == true) {
		console.info('Debug was activated, but stats.js wasn\'t inject')
	}

	if (!debug) return false;

	var stats = new Stats();
	stats.setMode( 0 );
	stats.domElement.style.position = 'fixed';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	stats.domElement.style.zIndex = '100';

	document.body.appendChild( stats.domElement );

	return stats;
}
