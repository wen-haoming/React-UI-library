
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {MicSvg} from '../Icons/MicSvg'

export const Mic: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={MicSvg} {...resetProps} />
}
