import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FabulousSvg } from '../Icons/FabulousSvg';

export const Fabulous: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FabulousSvg} {...resetProps} />;
};
