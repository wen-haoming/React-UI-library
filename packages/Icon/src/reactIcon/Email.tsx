
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {EmailSvg} from '../Icons/EmailSvg'

export const Email: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={EmailSvg} {...resetProps} />
}
