
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ArrowLeftCircleSvg} from '../Icons/ArrowLeftCircleSvg'

export const ArrowLeftCircle: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ArrowLeftCircleSvg} {...resetProps} />
}
