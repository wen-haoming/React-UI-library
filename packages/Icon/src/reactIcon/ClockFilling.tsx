import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ClockFillingSvg } from '../Icons/ClockFillingSvg';

export const ClockFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ClockFillingSvg} {...resetProps} />;
};
