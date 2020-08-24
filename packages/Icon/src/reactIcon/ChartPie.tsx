
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ChartPieSvg} from '../Icons/ChartPieSvg'

export const ChartPie: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ChartPieSvg} {...resetProps} />
}
