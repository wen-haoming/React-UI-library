
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TimeSvg} from '../Icons/TimeSvg'

export const Time: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TimeSvg} {...resetProps} />
}
