
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TextSvg} from '../Icons/TextSvg'

export const Text: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TextSvg} {...resetProps} />
}
