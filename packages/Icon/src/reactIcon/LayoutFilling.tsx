import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { LayoutFillingSvg } from '../Icons/LayoutFillingSvg';

export const LayoutFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={LayoutFillingSvg} {...resetProps} />;
};
