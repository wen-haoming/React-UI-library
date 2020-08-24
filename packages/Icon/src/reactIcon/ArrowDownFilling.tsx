import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowDownFillingSvg } from '../Icons/ArrowDownFillingSvg';

export const ArrowDownFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowDownFillingSvg} {...resetProps} />;
};
