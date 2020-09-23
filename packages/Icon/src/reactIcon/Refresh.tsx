import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { RefreshSvg } from '../Icons/RefreshSvg';

export const Refresh: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={RefreshSvg} {...resetProps} />;
};
