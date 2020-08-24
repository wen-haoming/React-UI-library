
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {SortingSvg} from '../Icons/SortingSvg'

export const Sorting: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={SortingSvg} {...resetProps} />
}
