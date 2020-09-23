import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SelectBoldSvg } from '../Icons/SelectBoldSvg';

export const SelectBold: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SelectBoldSvg} {...resetProps} />;
};
