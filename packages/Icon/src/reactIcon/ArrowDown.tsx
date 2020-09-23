import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowDownSvg } from '../Icons/ArrowDownSvg';

export const ArrowDown: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowDownSvg} {...resetProps} />;
};
