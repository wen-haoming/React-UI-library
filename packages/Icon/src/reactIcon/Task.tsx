
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TaskSvg} from '../Icons/TaskSvg'

export const Task: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TaskSvg} {...resetProps} />
}
