import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { NotificationFillingSvg } from '../Icons/NotificationFillingSvg';

export const NotificationFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={NotificationFillingSvg} {...resetProps} />;
};
