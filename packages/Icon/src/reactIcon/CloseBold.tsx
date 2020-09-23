import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CloseBoldSvg } from '../Icons/CloseBoldSvg';

export const CloseBold: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CloseBoldSvg} {...resetProps} />;
};
