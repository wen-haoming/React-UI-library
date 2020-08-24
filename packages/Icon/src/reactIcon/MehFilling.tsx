
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {MehFillingSvg} from '../Icons/MehFillingSvg'

export const MehFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={MehFillingSvg} {...resetProps} />
}
