import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { UserSvg } from '../Icons/UserSvg';

export const User: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={UserSvg} {...resetProps} />;
};
