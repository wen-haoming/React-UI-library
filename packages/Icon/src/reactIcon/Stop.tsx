import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { StopSvg } from '../Icons/StopSvg';

export const Stop: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={StopSvg} {...resetProps} />;
};
