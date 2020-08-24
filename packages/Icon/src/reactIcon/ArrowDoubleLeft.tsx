
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ArrowDoubleLeftSvg} from '../Icons/ArrowDoubleLeftSvg'

export const ArrowDoubleLeft: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ArrowDoubleLeftSvg} {...resetProps} />
}
