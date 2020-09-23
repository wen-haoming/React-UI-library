import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowUpFillingSvg } from '../Icons/ArrowUpFillingSvg';

export const ArrowUpFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowUpFillingSvg} {...resetProps} />;
};
