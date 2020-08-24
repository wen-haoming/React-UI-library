import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { LayersSvg } from '../Icons/LayersSvg';

export const Layers: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={LayersSvg} {...resetProps} />;
};
