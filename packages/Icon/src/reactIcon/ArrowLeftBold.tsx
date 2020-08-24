import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ArrowLeftBoldSvg } from '../Icons/ArrowLeftBoldSvg';

export const ArrowLeftBold: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ArrowLeftBoldSvg} {...resetProps} />;
};
