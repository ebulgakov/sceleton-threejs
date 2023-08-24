import initStats from './stats';
import actions from './actions';
import actionsConfig from '../actions_config';
const stats = initStats();

(function animate () {
  requestAnimationFrame(animate);

  actionsConfig.renders.forEach(function (object) {
  	object.renderer.render(object.scene, object.camera);
  });

  stats?.begin();
  actions().run();
  stats?.end();
})();
