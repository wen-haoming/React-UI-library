import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SecuritySvg } from '../Icons/SecuritySvg';

export const Security: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SecuritySvg} {...resetProps} />;
};
