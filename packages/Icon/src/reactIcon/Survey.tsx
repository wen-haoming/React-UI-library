import React from 'react';
import IconBase, { IconProps } from '../IconBase';
import { SurveySvg } from '../Icons/SurveySvg';

export const Survey: React.FC<IconProps> = props => {
  const { ...resetProps } = props;
  return <IconBase svgContent={SurveySvg} {...resetProps} />;
};
