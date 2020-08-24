import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FavoriteFillingSvg } from '../Icons/FavoriteFillingSvg';

export const FavoriteFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FavoriteFillingSvg} {...resetProps} />;
};
