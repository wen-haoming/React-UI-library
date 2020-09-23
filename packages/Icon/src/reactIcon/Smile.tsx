import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SmileSvg } from '../Icons/SmileSvg';

export const Smile: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SmileSvg} {...resetProps} />;
};
