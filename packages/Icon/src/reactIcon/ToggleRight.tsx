
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ToggleRightSvg} from '../Icons/ToggleRightSvg'

export const ToggleRight: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ToggleRightSvg} {...resetProps} />
}
