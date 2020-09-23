import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { BrowseSvg } from '../Icons/BrowseSvg';

export const Browse: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={BrowseSvg} {...resetProps} />;
};
