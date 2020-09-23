import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { DirectionUpSvg } from '../Icons/DirectionUpSvg';

export const DirectionUp: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={DirectionUpSvg} {...resetProps} />;
};
