'use strict';
var actionsConfig = require('../actions_config');
module.exports = function (add) {
  var actions = actionsConfig.actions;

  actions.run = function () {
    for(var i = 0; i < actions.length; i++) {
      actions[i]();
    }
  };
  actions.add = function (func) {
    actionsConfig.actions.push(func);
  };
  actions.remove = function (arg) {
    var idx = actionsConfig.actions.indexOf(arg);
    actionsConfig.actions.splice(idx, 1);
  };

  return actions;
};
