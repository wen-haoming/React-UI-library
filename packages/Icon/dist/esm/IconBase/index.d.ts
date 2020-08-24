import React from 'react';
import './icon.less';
export interface IconProps {
  className?: string;
  rotate?: number;
  spin?: boolean;
  style?: any;
}
declare type Props = IconProps & {
  svgContent: string;
};
declare const IconBase: React.FC<Props>;
export default IconBase;
