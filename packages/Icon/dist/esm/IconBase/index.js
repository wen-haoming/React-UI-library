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
import React from 'react';
import classnames from 'classnames';
import './icon.less';
import { useInsertStyles } from '../utils';
var IconBase = function(props) {
  var className = props.className,
    rotate = props.rotate,
    spin = props.spin,
    svgContent = props.svgContent,
    _a = props.style,
    style = _a === void 0 ? {} : _a;
  var classNames = classnames('micon', className, {});
  useInsertStyles();
  var svgClassNames = classnames('icon-svg', {
    'anticon-spin': spin,
  });
  return React.createElement(
    'span',
    { className: classNames, style: __assign({}, style) },
    React.createElement(
      'svg',
      {
        fill: style === null || style === void 0 ? void 0 : style.color,
        style: { transform: rotate ? 'rotate(' + rotate + 'deg)' : 'none' },
        className: svgClassNames,
        viewBox: '64 64 896 896',
        width: style.width ? style.width : '1em',
        height: style.height ? style.height : '1em',
      },
      React.createElement('path', { fill: 'inherit', d: svgContent }),
    ),
  );
};
export default IconBase;
