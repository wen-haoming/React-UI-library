import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { ToggleLeftSvg } from '../Icons/ToggleLeftSvg';

export const ToggleLeft: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={ToggleLeftSvg} {...resetProps} />;
};
