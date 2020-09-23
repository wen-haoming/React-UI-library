import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { LinkSvg } from '../Icons/LinkSvg';

export const Link: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={LinkSvg} {...resetProps} />;
};
