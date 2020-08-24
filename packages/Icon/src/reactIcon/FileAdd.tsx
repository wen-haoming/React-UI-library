
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FileAddSvg} from '../Icons/FileAddSvg'

export const FileAdd: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FileAddSvg} {...resetProps} />
}
