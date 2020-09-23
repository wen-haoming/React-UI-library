import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SkipSvg } from '../Icons/SkipSvg';

export const Skip: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SkipSvg} {...resetProps} />;
};
