
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {UserFillingSvg} from '../Icons/UserFillingSvg'

export const UserFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={UserFillingSvg} {...resetProps} />
}
