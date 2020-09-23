import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { Column4Svg } from '../Icons/Column4Svg';

export const Column4: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={Column4Svg} {...resetProps} />;
};
