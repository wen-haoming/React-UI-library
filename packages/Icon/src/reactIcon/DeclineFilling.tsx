import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { DeclineFillingSvg } from '../Icons/DeclineFillingSvg';

export const DeclineFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={DeclineFillingSvg} {...resetProps} />;
};
