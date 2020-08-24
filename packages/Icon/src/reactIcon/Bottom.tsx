import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { BottomSvg } from '../Icons/BottomSvg';

export const Bottom: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={BottomSvg} {...resetProps} />;
};
