import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { PictureFillingSvg } from '../Icons/PictureFillingSvg';

export const PictureFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={PictureFillingSvg} {...resetProps} />;
};
