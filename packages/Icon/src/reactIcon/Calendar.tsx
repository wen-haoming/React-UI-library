
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {CalendarSvg} from '../Icons/CalendarSvg'

export const Calendar: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={CalendarSvg} {...resetProps} />
}
