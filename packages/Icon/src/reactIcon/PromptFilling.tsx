
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {PromptFillingSvg} from '../Icons/PromptFillingSvg'

export const PromptFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={PromptFillingSvg} {...resetProps} />
}
