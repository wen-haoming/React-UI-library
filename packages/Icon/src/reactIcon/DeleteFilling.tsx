
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {DeleteFillingSvg} from '../Icons/DeleteFillingSvg'

export const DeleteFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={DeleteFillingSvg} {...resetProps} />
}
