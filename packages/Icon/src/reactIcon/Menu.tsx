import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { MenuSvg } from '../Icons/MenuSvg';

export const Menu: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={MenuSvg} {...resetProps} />;
};
