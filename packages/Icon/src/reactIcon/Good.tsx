import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { GoodSvg } from '../Icons/GoodSvg';

export const Good: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={GoodSvg} {...resetProps} />;
};
