import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { DownloadSvg } from '../Icons/DownloadSvg';

export const Download: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={DownloadSvg} {...resetProps} />;
};
