import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { TopFillingSvg } from '../Icons/TopFillingSvg';

export const TopFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={TopFillingSvg} {...resetProps} />;
};
