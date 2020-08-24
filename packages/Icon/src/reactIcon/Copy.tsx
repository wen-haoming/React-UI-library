
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {CopySvg} from '../Icons/CopySvg'

export const Copy: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={CopySvg} {...resetProps} />
}
