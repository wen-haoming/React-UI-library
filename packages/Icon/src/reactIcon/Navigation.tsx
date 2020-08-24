
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {NavigationSvg} from '../Icons/NavigationSvg'

export const Navigation: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={NavigationSvg} {...resetProps} />
}
