
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {MobilePhoneSvg} from '../Icons/MobilePhoneSvg'

export const MobilePhone: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={MobilePhoneSvg} {...resetProps} />
}
