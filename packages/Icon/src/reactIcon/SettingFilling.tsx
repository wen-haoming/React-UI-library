import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SettingFillingSvg } from '../Icons/SettingFillingSvg';

export const SettingFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SettingFillingSvg} {...resetProps} />;
};
