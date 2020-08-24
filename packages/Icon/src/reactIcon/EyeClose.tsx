
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {EyeCloseSvg} from '../Icons/EyeCloseSvg'

export const EyeClose: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={EyeCloseSvg} {...resetProps} />
}
