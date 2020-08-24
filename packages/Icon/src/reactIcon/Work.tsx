
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {WorkSvg} from '../Icons/WorkSvg'

export const Work: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={WorkSvg} {...resetProps} />
}
