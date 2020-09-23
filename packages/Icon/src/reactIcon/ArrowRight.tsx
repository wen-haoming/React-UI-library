import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowRightSvg } from '../Icons/ArrowRightSvg';

export const ArrowRight: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowRightSvg} {...resetProps} />;
};
