
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {OperationSvg} from '../Icons/OperationSvg'

export const Operation: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={OperationSvg} {...resetProps} />
}
