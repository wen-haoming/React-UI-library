import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FileCommonSvg } from '../Icons/FileCommonSvg';

export const FileCommon: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FileCommonSvg} {...resetProps} />;
};
