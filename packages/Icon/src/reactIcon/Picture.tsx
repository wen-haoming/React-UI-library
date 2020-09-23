import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { PictureSvg } from '../Icons/PictureSvg';

export const Picture: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={PictureSvg} {...resetProps} />;
};
