import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SuccessSvg } from '../Icons/SuccessSvg';

export const Success: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SuccessSvg} {...resetProps} />;
};
