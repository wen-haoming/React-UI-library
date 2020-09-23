import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ZoomOutSvg } from '../Icons/ZoomOutSvg';

export const ZoomOut: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ZoomOutSvg} {...resetProps} />;
};
