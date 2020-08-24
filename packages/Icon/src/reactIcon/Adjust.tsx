
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {AdjustSvg} from '../Icons/AdjustSvg'

export const Adjust: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={AdjustSvg} {...resetProps} />
}
