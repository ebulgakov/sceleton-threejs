import initStats from './stats';
import initActions from './actions';
import actionsConfig from '../actions_config';

export default function render () {
  const stats = initStats();
  const actions = initActions();
  requestAnimationFrame(function () {
  	render();
  });
  actionsConfig.renders.forEach(function (object) {
  	object.renderer.render(object.scene, object.camera);
  });

  if (stats) stats.begin();
  actions.run();
  if (stats) stats.end();
};
