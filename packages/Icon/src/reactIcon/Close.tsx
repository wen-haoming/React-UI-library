import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CloseSvg } from '../Icons/CloseSvg';

export const Close: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CloseSvg} {...resetProps} />;
};
