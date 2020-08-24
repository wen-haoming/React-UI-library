
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {DirectionDownSvg} from '../Icons/DirectionDownSvg'

export const DirectionDown: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={DirectionDownSvg} {...resetProps} />
}
