import { useEffect } from 'react';
import { insertCss } from 'insert-css';

export const iconStyles = `
.micon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: mialiased;
  -moz-osx-font-smoothing: grayscale;
}
.micon > * {
  line-height: 1;
}
.micon svg {
  display: inline-block;
}
.micon::before {
  display: none;
}
.micon .micon-icon {
  display: block;
}
.micon[tabindex] {
  cursor: pointer;
}
.micon-spin::before,
.micon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}
@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

let cssInjectedFlag = false;

export const useInsertStyles = (styleStr: string = iconStyles) => {
  useEffect(() => {
    if (!cssInjectedFlag) {
      insertCss(styleStr, {
        prepend: true,
      });
      cssInjectedFlag = true;
    }
  }, []);
};
