'use strict';

var _character = require('./character.js');

var _character2 = _interopRequireDefault(_character);

var _dashboard = require('./dashboard.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function () {
  var dash = new _dashboard.Dashboard();
  dash.init();
});