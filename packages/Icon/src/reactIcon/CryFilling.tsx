import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CryFillingSvg } from '../Icons/CryFillingSvg';

export const CryFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CryFillingSvg} {...resetProps} />;
};
