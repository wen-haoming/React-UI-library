
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {PadSvg} from '../Icons/PadSvg'

export const Pad: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={PadSvg} {...resetProps} />
}
