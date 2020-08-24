import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { MehSvg } from '../Icons/MehSvg';

export const Meh: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={MehSvg} {...resetProps} />;
};
