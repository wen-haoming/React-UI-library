
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {MapFillingSvg} from '../Icons/MapFillingSvg'

export const MapFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={MapFillingSvg} {...resetProps} />
}
