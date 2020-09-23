import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { UnlockSvg } from '../Icons/UnlockSvg';

export const Unlock: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={UnlockSvg} {...resetProps} />;
};
