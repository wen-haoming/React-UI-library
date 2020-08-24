
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FileDeleteSvg} from '../Icons/FileDeleteSvg'

export const FileDelete: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FileDeleteSvg} {...resetProps} />
}
