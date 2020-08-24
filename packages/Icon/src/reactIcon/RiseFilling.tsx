import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { RiseFillingSvg } from '../Icons/RiseFillingSvg';

export const RiseFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={RiseFillingSvg} {...resetProps} />;
};
