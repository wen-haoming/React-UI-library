import React from 'react';
import './icon.less';
export interface IconProps {
  className?: string;
  rotate?: number;
  spin?: boolean;
  style?: Partial<CSSStyleDeclaration>;
}
declare type Props = IconProps & {
  svgContent: string;
};
declare const IconBase: React.FC<Props>;
export default IconBase;
