import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FilterFillingSvg } from '../Icons/FilterFillingSvg';

export const FilterFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FilterFillingSvg} {...resetProps} />;
};
