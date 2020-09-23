import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ElectronicsSvg } from '../Icons/ElectronicsSvg';

export const Electronics: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ElectronicsSvg} {...resetProps} />;
};
