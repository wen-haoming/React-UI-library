
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {WarningFillingSvg} from '../Icons/WarningFillingSvg'

export const WarningFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={WarningFillingSvg} {...resetProps} />
}
