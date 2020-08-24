import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CapsLockSvg } from '../Icons/CapsLockSvg';

export const CapsLock: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CapsLockSvg} {...resetProps} />;
};
