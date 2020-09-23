import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FilterSvg } from '../Icons/FilterSvg';

export const Filter: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FilterSvg} {...resetProps} />;
};
