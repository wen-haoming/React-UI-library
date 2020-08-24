'use strict';
exports.__esModule = true;
exports.useInsertStyles = exports.iconStyles = void 0;
var react_1 = require('react');
var insert_css_1 = require('insert-css');
exports.iconStyles =
  '\n.micon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: mialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.micon > * {\n  line-height: 1;\n}\n.micon svg {\n  display: inline-block;\n}\n.micon::before {\n  display: none;\n}\n.micon .micon-icon {\n  display: block;\n}\n.micon[tabindex] {\n  cursor: pointer;\n}\n.micon-spin::before,\n.micon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n';
var cssInjectedFlag = false;
exports.useInsertStyles = function(styleStr) {
  if (styleStr === void 0) {
    styleStr = exports.iconStyles;
  }
  react_1.useEffect(function() {
    if (!cssInjectedFlag) {
      insert_css_1.insertCss(styleStr, {
        prepend: true,
      });
      cssInjectedFlag = true;
    }
  }, []);
};
