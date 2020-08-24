
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ChartBarSvg} from '../Icons/ChartBarSvg'

export const ChartBar: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ChartBarSvg} {...resetProps} />
}
