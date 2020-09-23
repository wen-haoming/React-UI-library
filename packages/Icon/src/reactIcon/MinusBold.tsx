import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { MinusBoldSvg } from '../Icons/MinusBoldSvg';

export const MinusBold: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={MinusBoldSvg} {...resetProps} />;
};
