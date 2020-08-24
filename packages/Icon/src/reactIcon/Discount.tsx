
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {DiscountSvg} from '../Icons/DiscountSvg'

export const Discount: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={DiscountSvg} {...resetProps} />
}
