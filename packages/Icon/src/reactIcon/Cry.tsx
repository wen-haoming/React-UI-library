import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CrySvg } from '../Icons/CrySvg';

export const Cry: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CrySvg} {...resetProps} />;
};
