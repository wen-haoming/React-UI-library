import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { MapSvg } from '../Icons/MapSvg';

export const Map: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={MapSvg} {...resetProps} />;
};
