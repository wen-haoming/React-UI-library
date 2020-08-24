
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {SaveSvg} from '../Icons/SaveSvg'

export const Save: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={SaveSvg} {...resetProps} />
}
