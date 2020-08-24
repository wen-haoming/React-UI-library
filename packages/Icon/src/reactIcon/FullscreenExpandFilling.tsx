
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FullscreenExpandFillingSvg} from '../Icons/FullscreenExpandFillingSvg'

export const FullscreenExpandFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FullscreenExpandFillingSvg} {...resetProps} />
}
