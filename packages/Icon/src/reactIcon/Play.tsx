import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { PlaySvg } from '../Icons/PlaySvg';

export const Play: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={PlaySvg} {...resetProps} />;
};
