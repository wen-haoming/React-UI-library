
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {NewsFillingSvg} from '../Icons/NewsFillingSvg'

export const NewsFilling: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={NewsFillingSvg} {...resetProps} />
}
