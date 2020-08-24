import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { RunUpSvg } from '../Icons/RunUpSvg';

export const RunUp: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={RunUpSvg} {...resetProps} />;
};
