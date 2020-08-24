import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { DirectionLeftSvg } from '../Icons/DirectionLeftSvg';

export const DirectionLeft: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={DirectionLeftSvg} {...resetProps} />;
};
