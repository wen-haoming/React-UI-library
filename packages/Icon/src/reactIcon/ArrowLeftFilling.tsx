
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ArrowLeftFillingSvg} from '../Icons/ArrowLeftFillingSvg'

export const ArrowLeftFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ArrowLeftFillingSvg} {...resetProps} />
}
