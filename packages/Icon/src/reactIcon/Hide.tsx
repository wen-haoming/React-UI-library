import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { HideSvg } from '../Icons/HideSvg';

export const Hide: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={HideSvg} {...resetProps} />;
};
