import { useEffect } from 'react';
import { insertCss } from 'insert-css';
export var iconStyles = "\n.micon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: mialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.micon > * {\n  line-height: 1;\n}\n.micon svg {\n  display: inline-block;\n}\n.micon::before {\n  display: none;\n}\n.micon .micon-icon {\n  display: block;\n}\n.micon[tabindex] {\n  cursor: pointer;\n}\n.micon-spin::before,\n.micon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var cssInjectedFlag = false;
export var useInsertStyles = function (styleStr) {
    if (styleStr === void 0) { styleStr = iconStyles; }
    useEffect(function () {
        if (!cssInjectedFlag) {
            insertCss(styleStr, {
                prepend: true
            });
            cssInjectedFlag = true;
        }
    }, []);
};
