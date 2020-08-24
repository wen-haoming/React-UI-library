import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { PinSvg } from '../Icons/PinSvg';

export const Pin: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={PinSvg} {...resetProps} />;
};
