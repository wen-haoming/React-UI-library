
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {HomeFillingSvg} from '../Icons/HomeFillingSvg'

export const HomeFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={HomeFillingSvg} {...resetProps} />
}
