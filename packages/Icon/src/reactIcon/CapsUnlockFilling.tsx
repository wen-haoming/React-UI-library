import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CapsUnlockFillingSvg } from '../Icons/CapsUnlockFillingSvg';

export const CapsUnlockFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CapsUnlockFillingSvg} {...resetProps} />;
};
