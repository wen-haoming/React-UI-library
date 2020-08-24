
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {ColumnHorizontalSvg} from '../Icons/ColumnHorizontalSvg'

export const ColumnHorizontal: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={ColumnHorizontalSvg} {...resetProps} />
}
