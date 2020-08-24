
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ExplainSvg} from '../Icons/ExplainSvg'

export const Explain: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ExplainSvg} {...resetProps} />
}
