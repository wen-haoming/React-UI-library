
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FileSvg} from '../Icons/FileSvg'

export const File: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FileSvg} {...resetProps} />
}
