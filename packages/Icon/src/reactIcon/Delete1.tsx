import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { Delete1Svg } from '../Icons/Delete1Svg';

export const Delete1: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={Delete1Svg} {...resetProps} />;
};
