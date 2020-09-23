import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ColumnSvg } from '../Icons/ColumnSvg';

export const Column: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ColumnSvg} {...resetProps} />;
};
