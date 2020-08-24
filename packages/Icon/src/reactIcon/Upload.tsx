import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { UploadSvg } from '../Icons/UploadSvg';

export const Upload: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={UploadSvg} {...resetProps} />;
};
