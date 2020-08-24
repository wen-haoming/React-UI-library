
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {EditFillingSvg} from '../Icons/EditFillingSvg'

export const EditFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={EditFillingSvg} {...resetProps} />
}
