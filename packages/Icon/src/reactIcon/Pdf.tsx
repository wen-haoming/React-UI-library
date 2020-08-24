import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { PdfSvg } from '../Icons/PdfSvg';

export const Pdf: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={PdfSvg} {...resetProps} />;
};
