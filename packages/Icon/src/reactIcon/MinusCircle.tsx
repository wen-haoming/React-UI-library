import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { MinusCircleSvg } from '../Icons/MinusCircleSvg';

export const MinusCircle: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={MinusCircleSvg} {...resetProps} />;
};
