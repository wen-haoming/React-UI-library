import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ScanningSvg } from '../Icons/ScanningSvg';

export const Scanning: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ScanningSvg} {...resetProps} />;
};
