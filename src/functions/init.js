'use strict';
import actions from '../actions_config';
import config from '../config';
import camera from './camera';
import renderer from './renderer';
import scene from './scene';


export default function (container) {
  config.container = container;

  const mainScene = scene();
  const parameters = {
    renderer: renderer(config),
    camera: camera(mainScene, config),
    scene: mainScene,
    config: config
  };

  actions.renders.push(parameters);

  return parameters;
};
