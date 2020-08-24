
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FullscreenShrinkSvg} from '../Icons/FullscreenShrinkSvg'

export const FullscreenShrink: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FullscreenShrinkSvg} {...resetProps} />
}
