import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ImageTextSvg } from '../Icons/ImageTextSvg';

export const ImageText: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ImageTextSvg} {...resetProps} />;
};
