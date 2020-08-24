
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {SmileFillingSvg} from '../Icons/SmileFillingSvg'

export const SmileFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={SmileFillingSvg} {...resetProps} />
}
