
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TelephoneOutSvg} from '../Icons/TelephoneOutSvg'

export const TelephoneOut: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TelephoneOutSvg} {...resetProps} />
}
