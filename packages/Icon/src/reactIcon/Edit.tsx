import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { EditSvg } from '../Icons/EditSvg';

export const Edit: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={EditSvg} {...resetProps} />;
};
