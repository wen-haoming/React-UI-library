import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SearchSvg } from '../Icons/SearchSvg';

export const Search: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SearchSvg} {...resetProps} />;
};
