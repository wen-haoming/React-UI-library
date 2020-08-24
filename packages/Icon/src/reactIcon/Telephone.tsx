
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TelephoneSvg} from '../Icons/TelephoneSvg'

export const Telephone: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TelephoneSvg} {...resetProps} />
}
