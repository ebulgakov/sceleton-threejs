var actions = require('../../functions/actions')();
require('../../libs/TextGeometry');
require('../../libs/FontUtils');
require('../../libs/fonts/helvetiker_regular.typeface');

module.exports = function (parameters) {
	var config = parameters.config;
	var scene = parameters.scene;
	var animateToCube = [];
	var animateToSphere = [];
	var objects = [];
	var isRunSphere = false;
	var objectsAdded = 0;
	var o3d = new THREE.Object3D();
	var toPlaneGeometry = require('./plane_geometry')(config);
	var toSphereGeometry = require('./sphere_geometry')(config.size.height/2, 24, 24);
	var textGeometry = new THREE.TextGeometry('CloudCastle', { size: 90, height: 10 });
	var textGeometry1 = textGeometry.clone();
	var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity:0, visible: false });
	var text = new THREE.Mesh(textGeometry, textMaterial);

	o3d.add(text);
	scene.add(o3d);


	for (var h = 0; h < config.size.height; h+=200) {
		for (var i = 0; i < toPlaneGeometry.vertices.length; i++) {
			var sphereGeometry = require('./sphere_geometry')(5);

			var sphereMaterial = new THREE.MeshBasicMaterial({
				color: 0x000000,
				transparent: true,
				opacity: 0.5
			});
			var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

			animateToCube.push(
				new TWEEN.Tween(sphere.position).to({
					x: toPlaneGeometry.vertices[i].x,
					y: toPlaneGeometry.vertices[i].y,
					z: -h
				}, 1000 + i*10)
			);
			objects.push(sphere)
			o3d.add(sphere);
		}
	}


	for (var i = 0; i < objects.length; i++) {
		var sphere = objects[i];
		animateToSphere.push(
			new TWEEN.Tween(sphere.position).to({
				x: toSphereGeometry.vertices[i].x,
				y: toSphereGeometry.vertices[i].y,
				z: toSphereGeometry.vertices[i].z
			}, 100 + i*10)
		);
	}


	for (var i = 0; i < textGeometry.vertices.length; i++) {
		textGeometry.vertices[i].communicateObj = objects[THREE.Math.randInt(0, objects.length-1)].position;
	}


	function toCubePoints() {
		animateToCube.forEach(function (tween, index) {
			tween.delay(index).yoyo(true).repeat( 2 ).onUpdate(function () {
			}).onComplete(function(data) {
				objectsAdded++;

				if (objects.length == objectsAdded) {
					toSpherePoints();
					objectsAdded = 0;
				}
			});
			tween.start();
		});
	}


	function toSpherePoints() {
		isRunSphere = true;
		animateToSphere.forEach(function (tween, index) {
			tween.delay(index)
			//.easing(TWEEN.Easing.Quintic.In)
			.onUpdate(function () {
				textGeometry.verticesNeedUpdate = true;
			}).onComplete(function(data) {
				objectsAdded++;
					new TWEEN.Tween(objects[index].material).to({
						opacity: 0
					}, 1000).onComplete(function() {
						objects[index].material.visible = false;
					}).start();


				if (objects.length == objectsAdded) {
					setTimeout(toTextPoints, 100)
				}
			});
			tween.start();
		});

		textMaterial.visible = true;
		new TWEEN.Tween(textMaterial)
		.to({
			opacity: 0.5
		}, 20000).start();
	}


	function toTextPoints () {
		isRunSphere = false;
		for (var i = 0; i < textGeometry.vertices.length; i++) {
			var vertice = textGeometry.vertices[i];
			var textVertice = textGeometry1.vertices[i];

			var tween = new TWEEN.Tween(vertice).to({
				x: textVertice.x,
				y: textVertice.y,
				z: textVertice.z
			}, 3000).onUpdate(function () {
				textGeometry.verticesNeedUpdate = true;
			});
			tween.start()
		}

		new TWEEN.Tween(text.position).to({
			x: -350
		}, 3000).start();
	}


	actions.add(function () {
		var time = performance.now();
		TWEEN.update(time);

		if (isRunSphere) {
			for (var i = 0; i < textGeometry.vertices.length; i++) {
				var vertice = textGeometry.vertices[i];
				vertice.x = vertice.communicateObj.x;
				vertice.setY(vertice.communicateObj.y);
				vertice.setZ(vertice.communicateObj.z);
			}
		}
	});

	toCubePoints();
};
