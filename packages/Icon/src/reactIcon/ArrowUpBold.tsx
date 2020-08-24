
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ArrowUpBoldSvg} from '../Icons/ArrowUpBoldSvg'

export const ArrowUpBold: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ArrowUpBoldSvg} {...resetProps} />
}
