
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {AshbinSvg} from '../Icons/AshbinSvg'

export const Ashbin: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={AshbinSvg} {...resetProps} />
}
