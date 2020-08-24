
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {Switch1Svg} from '../Icons/Switch1Svg'

export const Switch1: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={Switch1Svg} {...resetProps} />
}
