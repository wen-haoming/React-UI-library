import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FolderFillingSvg } from '../Icons/FolderFillingSvg';

export const FolderFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FolderFillingSvg} {...resetProps} />;
};
