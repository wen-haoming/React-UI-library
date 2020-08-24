
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {WorkFillingSvg} from '../Icons/WorkFillingSvg'

export const WorkFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={WorkFillingSvg} {...resetProps} />
}
