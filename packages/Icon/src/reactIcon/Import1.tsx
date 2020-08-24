
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {Import1Svg} from '../Icons/Import1Svg'

export const Import1: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={Import1Svg} {...resetProps} />
}
