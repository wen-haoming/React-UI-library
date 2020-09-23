import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowUpCircleSvg } from '../Icons/ArrowUpCircleSvg';

export const ArrowUpCircle: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowUpCircleSvg} {...resetProps} />;
};
