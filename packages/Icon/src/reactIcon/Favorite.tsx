
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {FavoriteSvg} from '../Icons/FavoriteSvg'

export const Favorite: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={FavoriteSvg} {...resetProps} />
}
