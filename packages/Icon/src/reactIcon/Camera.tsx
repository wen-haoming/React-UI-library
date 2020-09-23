import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CameraSvg } from '../Icons/CameraSvg';

export const Camera: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CameraSvg} {...resetProps} />;
};
