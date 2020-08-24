
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {WarningSvg} from '../Icons/WarningSvg'

export const Warning: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={WarningSvg} {...resetProps} />
}
