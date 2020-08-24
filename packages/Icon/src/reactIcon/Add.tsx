import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { AddSvg } from '../Icons/AddSvg';

export const Add: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={AddSvg} {...resetProps} />;
};
