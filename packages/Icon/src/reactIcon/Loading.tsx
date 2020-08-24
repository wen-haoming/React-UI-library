
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {LoadingSvg} from '../Icons/LoadingSvg'

export const Loading: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={LoadingSvg} {...resetProps} />
}
