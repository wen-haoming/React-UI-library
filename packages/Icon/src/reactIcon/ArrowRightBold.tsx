import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowRightBoldSvg } from '../Icons/ArrowRightBoldSvg';

export const ArrowRightBold: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowRightBoldSvg} {...resetProps} />;
};
