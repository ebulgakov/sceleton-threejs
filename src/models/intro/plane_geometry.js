module.exports = function (config) {
	var geometry = new THREE.PlaneGeometry(config.size.width, config.size.height, 10, 10);

	return geometry;
};
