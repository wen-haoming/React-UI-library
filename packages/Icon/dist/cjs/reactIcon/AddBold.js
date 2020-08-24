'use strict';
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
exports.__esModule = true;
exports.AddBold = void 0;
var react_1 = require('react');
var IconBase_1 = require('../IconBase');
var AddBoldSvg_1 = require('../Icons/AddBoldSvg');
exports.AddBold = function(props) {
  var resetProps = __rest(props, []);
  return react_1['default'].createElement(IconBase_1['default'], {
    svgContent: AddBoldSvg_1.AddBoldSvg,
    style: resetProps.style,
  });
};
