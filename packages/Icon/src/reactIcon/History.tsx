import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { HistorySvg } from '../Icons/HistorySvg';

export const History: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={HistorySvg} {...resetProps} />;
};
