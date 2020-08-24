
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ZoomInSvg} from '../Icons/ZoomInSvg'

export const ZoomIn: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ZoomInSvg} {...resetProps} />
}
