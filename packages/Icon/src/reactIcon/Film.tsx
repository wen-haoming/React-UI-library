import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { FilmSvg } from '../Icons/FilmSvg';

export const Film: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={FilmSvg} {...resetProps} />;
};
