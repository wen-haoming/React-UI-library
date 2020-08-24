
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FileOpenSvg} from '../Icons/FileOpenSvg'

export const FileOpen: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FileOpenSvg} {...resetProps} />
}
