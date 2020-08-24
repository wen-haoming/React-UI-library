import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowRightFillingSvg } from '../Icons/ArrowRightFillingSvg';

export const ArrowRightFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowRightFillingSvg} {...resetProps} />;
};
