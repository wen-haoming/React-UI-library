import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { Keyboard9Svg } from '../Icons/Keyboard9Svg';

export const Keyboard9: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={Keyboard9Svg} {...resetProps} />;
};
