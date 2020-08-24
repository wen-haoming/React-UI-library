import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SuccessFillingSvg } from '../Icons/SuccessFillingSvg';

export const SuccessFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SuccessFillingSvg} {...resetProps} />;
};
