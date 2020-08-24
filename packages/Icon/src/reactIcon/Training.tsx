
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {TrainingSvg} from '../Icons/TrainingSvg'

export const Training: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={TrainingSvg} {...resetProps} />
}
