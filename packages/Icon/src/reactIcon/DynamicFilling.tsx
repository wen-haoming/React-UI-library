
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {DynamicFillingSvg} from '../Icons/DynamicFillingSvg'

export const DynamicFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={DynamicFillingSvg} {...resetProps} />
}
