import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CompleteSvg } from '../Icons/CompleteSvg';

export const Complete: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CompleteSvg} {...resetProps} />;
};
