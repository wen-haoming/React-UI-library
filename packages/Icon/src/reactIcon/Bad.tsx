import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { BadSvg } from '../Icons/BadSvg';

export const Bad: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={BadSvg} {...resetProps} />;
};
