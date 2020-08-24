
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {HomeSvg} from '../Icons/HomeSvg'

export const Home: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={HomeSvg} {...resetProps} />
}
