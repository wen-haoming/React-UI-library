
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {Export1Svg} from '../Icons/Export1Svg'

export const Export1: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={Export1Svg} {...resetProps} />
}
