
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TopSvg} from '../Icons/TopSvg'

export const Top: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TopSvg} {...resetProps} />
}
