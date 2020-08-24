'use strict';
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
var react_1 = require('react');
var classnames_1 = require('classnames');
require('./icon.less');
var utils_1 = require('../utils');
var IconBase = function(props) {
  var className = props.className,
    rotate = props.rotate,
    spin = props.spin,
    svgContent = props.svgContent,
    _a = props.style,
    style = _a === void 0 ? {} : _a;
  var classNames = classnames_1['default']('micon', className, {});
  utils_1.useInsertStyles();
  var svgClassNames = classnames_1['default']('icon-svg', {
    'anticon-spin': spin,
  });
  return react_1['default'].createElement(
    'span',
    { className: classNames, style: __assign({}, style) },
    react_1['default'].createElement('svg', {
      fill: style === null || style === void 0 ? void 0 : style.color,
      style: { transform: rotate ? 'rotate(' + rotate + 'deg)' : 'none' },
      className: svgClassNames,
      viewBox: '64 64 896 896',
      width: style.width ? style.width : '1em',
      height: style.height ? style.height : '1em',
      dangerouslySetInnerHTML: { __html: svgContent },
    }),
  );
};
exports['default'] = IconBase;
