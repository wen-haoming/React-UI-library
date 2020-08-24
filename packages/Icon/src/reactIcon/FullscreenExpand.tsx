
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FullscreenExpandSvg} from '../Icons/FullscreenExpandSvg'

export const FullscreenExpand: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FullscreenExpandSvg} {...resetProps} />
}
