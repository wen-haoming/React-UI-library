
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {AttachmentSvg} from '../Icons/AttachmentSvg'

export const Attachment: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={AttachmentSvg} {...resetProps} />
}
