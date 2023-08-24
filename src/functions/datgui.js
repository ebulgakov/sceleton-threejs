import config from '../config';
import dat from 'dat.gui';

const container = new dat.GUI();
container.close();


export default function (name) {
  const debug = typeof dat !== 'undefined' && config.debug === true;

  if (typeof dat === 'undefined' && config.debug === true) {
    console.info('Debug was activated, but dat.gui.js wasn\'t inject')
  }

  const gui = debug ? container.addFolder(name || 'Object') : null;

  return function (obj, sbj, param, extremum) {
    if (typeof param == 'string') {
      return addGui(param)
    } else if (typeof param == 'object') {
      param.forEach(addGui)
    }

    function addGui(innerParam) {

      sbj[innerParam] = obj[innerParam];
      if (debug) {
        var arrOptions = [obj, innerParam];

        if (typeof extremum == 'number') {
          arrOptions.push(-extremum)
          arrOptions.push(extremum)
        } else if (typeof extremum == 'object') {
          arrOptions.push(extremum[0])
          arrOptions.push(extremum[1])
        }
        gui.add.apply(gui, arrOptions).onChange(function (value) {
          sbj[innerParam] = value;
        });
      }
    }
  }
};
