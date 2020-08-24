
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {SwitchFillingSvg} from '../Icons/SwitchFillingSvg'

export const SwitchFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={SwitchFillingSvg} {...resetProps} />
}
