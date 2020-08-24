
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {DragSvg} from '../Icons/DragSvg'

export const Drag: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={DragSvg} {...resetProps} />
}
