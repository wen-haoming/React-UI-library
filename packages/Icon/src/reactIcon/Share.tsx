import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ShareSvg } from '../Icons/ShareSvg';

export const Share: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ShareSvg} {...resetProps} />;
};
