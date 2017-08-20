'use strict';

var _dashboard = require('./dashboard.js');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = document.querySelector('.theme');
var menu = document.querySelector('.theme-options__start');

menu.addEventListener('click', function () {
  theme.style.visibility = 'hidden';
  theme.style.opacity = '0';

  var dash = new _dashboard2.default();
  dash.init();
});