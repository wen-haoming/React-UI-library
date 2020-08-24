
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ForwardSvg} from '../Icons/ForwardSvg'

export const Forward: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ForwardSvg} {...resetProps} />
}
