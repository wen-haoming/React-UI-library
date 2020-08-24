
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {CustomerServiceSvg} from '../Icons/CustomerServiceSvg'

export const CustomerService: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={CustomerServiceSvg} {...resetProps} />
}
