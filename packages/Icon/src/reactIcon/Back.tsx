
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {BackSvg} from '../Icons/BackSvg'

export const Back: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={BackSvg} {...resetProps} />
}
