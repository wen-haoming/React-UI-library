
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {SignOutSvg} from '../Icons/SignOutSvg'

export const SignOut: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={SignOutSvg} {...resetProps} />
}
