import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { HistoryFillingSvg } from '../Icons/HistoryFillingSvg';

export const HistoryFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={HistoryFillingSvg} {...resetProps} />;
};
