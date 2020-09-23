import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { IntermediateFillingSvg } from '../Icons/IntermediateFillingSvg';

export const IntermediateFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={IntermediateFillingSvg} {...resetProps} />;
};
