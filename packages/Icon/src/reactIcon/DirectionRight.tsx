import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { DirectionRightSvg } from '../Icons/DirectionRightSvg';

export const DirectionRight: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={DirectionRightSvg} {...resetProps} />;
};
