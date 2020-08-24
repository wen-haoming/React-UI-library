import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { MoveSvg } from '../Icons/MoveSvg';

export const Move: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={MoveSvg} {...resetProps} />;
};
