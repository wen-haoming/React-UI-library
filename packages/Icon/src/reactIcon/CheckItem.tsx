import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CheckItemSvg } from '../Icons/CheckItemSvg';

export const CheckItem: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CheckItemSvg} {...resetProps} />;
};
