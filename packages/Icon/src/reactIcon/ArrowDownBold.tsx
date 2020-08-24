
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ArrowDownBoldSvg} from '../Icons/ArrowDownBoldSvg'

export const ArrowDownBold: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ArrowDownBoldSvg} {...resetProps} />
}
