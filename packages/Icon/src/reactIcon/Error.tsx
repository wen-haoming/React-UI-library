
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ErrorSvg} from '../Icons/ErrorSvg'

export const Error: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ErrorSvg} {...resetProps} />
}
