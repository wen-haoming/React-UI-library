
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {Keyboard26Svg} from '../Icons/Keyboard26Svg'

export const Keyboard26: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={Keyboard26Svg} {...resetProps} />
}
