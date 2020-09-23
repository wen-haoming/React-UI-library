import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ColumnVerticalSvg } from '../Icons/ColumnVerticalSvg';

export const ColumnVertical: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ColumnVerticalSvg} {...resetProps} />;
};
