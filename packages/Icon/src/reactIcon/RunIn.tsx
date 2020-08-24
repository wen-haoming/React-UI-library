
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {RunInSvg} from '../Icons/RunInSvg'

export const RunIn: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={RunInSvg} {...resetProps} />
}
