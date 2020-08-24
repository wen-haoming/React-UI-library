
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ArrowRightCircleSvg} from '../Icons/ArrowRightCircleSvg'

export const ArrowRightCircle: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ArrowRightCircleSvg} {...resetProps} />
}
