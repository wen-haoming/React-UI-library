import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { DataViewSvg } from '../Icons/DataViewSvg';

export const DataView: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={DataViewSvg} {...resetProps} />;
};
