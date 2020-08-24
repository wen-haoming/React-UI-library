import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { CommentSvg } from '../Icons/CommentSvg';

export const Comment: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={CommentSvg} {...resetProps} />;
};
