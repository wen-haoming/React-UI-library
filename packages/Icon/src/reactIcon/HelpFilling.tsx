import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { HelpFillingSvg } from '../Icons/HelpFillingSvg';

export const HelpFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={HelpFillingSvg} {...resetProps} />;
};
