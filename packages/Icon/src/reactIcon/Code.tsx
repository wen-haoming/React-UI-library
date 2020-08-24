
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {CodeSvg} from '../Icons/CodeSvg'

export const Code: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={CodeSvg} {...resetProps} />
}
