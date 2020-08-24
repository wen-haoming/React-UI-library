
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {LayoutSvg} from '../Icons/LayoutSvg'

export const Layout: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={LayoutSvg} {...resetProps} />
}
