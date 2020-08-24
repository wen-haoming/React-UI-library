
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {NotificationSvg} from '../Icons/NotificationSvg'

export const Notification: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={NotificationSvg} {...resetProps} />
}
