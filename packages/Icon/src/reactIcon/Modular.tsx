import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ModularSvg } from '../Icons/ModularSvg';

export const Modular: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ModularSvg} {...resetProps} />;
};
