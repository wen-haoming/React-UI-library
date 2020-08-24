import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { MinusSvg } from '../Icons/MinusSvg';

export const Minus: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={MinusSvg} {...resetProps} />;
};
