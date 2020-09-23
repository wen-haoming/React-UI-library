import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CutSvg } from '../Icons/CutSvg';

export const Cut: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CutSvg} {...resetProps} />;
};
