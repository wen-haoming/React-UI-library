import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ElipsisSvg } from '../Icons/ElipsisSvg';

export const Elipsis: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ElipsisSvg} {...resetProps} />;
};
