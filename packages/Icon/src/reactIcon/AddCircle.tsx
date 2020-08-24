import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { AddCircleSvg } from '../Icons/AddCircleSvg';

export const AddCircle: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={AddCircleSvg} {...resetProps} />;
};
