
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {MoreSvg} from '../Icons/MoreSvg'

export const More: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={MoreSvg} {...resetProps} />
}
