
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {AddBoldSvg} from '../Icons/AddBoldSvg'

export const AddBold: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={AddBoldSvg} {...resetProps} />
}
