import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SelectSvg } from '../Icons/SelectSvg';

export const Select: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SelectSvg} {...resetProps} />;
};
