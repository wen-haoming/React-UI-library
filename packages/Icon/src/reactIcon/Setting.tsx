import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SettingSvg } from '../Icons/SettingSvg';

export const Setting: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SettingSvg} {...resetProps} />;
};
