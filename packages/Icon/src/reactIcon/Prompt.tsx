import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { PromptSvg } from '../Icons/PromptSvg';

export const Prompt: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={PromptSvg} {...resetProps} />;
};
