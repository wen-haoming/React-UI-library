
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ArrowDoubleRightSvg} from '../Icons/ArrowDoubleRightSvg'

export const ArrowDoubleRight: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ArrowDoubleRightSvg} {...resetProps} />
}
