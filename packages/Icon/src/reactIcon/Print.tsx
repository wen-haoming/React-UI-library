
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {PrintSvg} from '../Icons/PrintSvg'

export const Print: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={PrintSvg} {...resetProps} />
}
