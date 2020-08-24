
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TaskFillingSvg} from '../Icons/TaskFillingSvg'

export const TaskFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TaskFillingSvg} {...resetProps} />
}
