import Stats from "stats.js";
import config from "../config";


export default function () {
	var debug = typeof Stats != 'undefined' && config.debug == true;

	if (typeof Stats == 'undefined' && config.debug == true) {
		console.info('Debug was activated, but stats.js wasn\'t inject')
	}

	if (!debug) return;

	var stats = new Stats();
	stats.showPanel( 0 )
	document.body.appendChild( stats.dom );

	return stats;
}
