
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {HelpSvg} from '../Icons/HelpSvg'

export const Help: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={HelpSvg} {...resetProps} />
}
