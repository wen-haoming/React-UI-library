
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {LockSvg} from '../Icons/LockSvg'

export const Lock: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={LockSvg} {...resetProps} />
}
