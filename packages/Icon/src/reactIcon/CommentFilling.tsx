import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CommentFillingSvg } from '../Icons/CommentFillingSvg';

export const CommentFilling: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CommentFillingSvg} {...resetProps} />;
};
