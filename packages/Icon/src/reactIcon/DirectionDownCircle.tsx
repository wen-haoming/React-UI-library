
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {DirectionDownCircleSvg} from '../Icons/DirectionDownCircleSvg'

export const DirectionDownCircle: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={DirectionDownCircleSvg} {...resetProps} />
}
