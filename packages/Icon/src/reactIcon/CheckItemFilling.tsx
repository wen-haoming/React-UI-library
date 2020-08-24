import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CheckItemFillingSvg } from '../Icons/CheckItemFillingSvg';

export const CheckItemFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CheckItemFillingSvg} {...resetProps} />;
};
