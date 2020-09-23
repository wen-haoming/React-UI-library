import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FileCommonFillingSvg } from '../Icons/FileCommonFillingSvg';

export const FileCommonFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FileCommonFillingSvg} {...resetProps} />;
};
