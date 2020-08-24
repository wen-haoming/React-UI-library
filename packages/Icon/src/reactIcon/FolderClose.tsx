
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FolderCloseSvg} from '../Icons/FolderCloseSvg'

export const FolderClose: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FolderCloseSvg} {...resetProps} />
}
