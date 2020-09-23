import React, { useContext } from 'react';
import classNames from 'classnames';
import MenuContext, { ModeType, ContextType } from './MenuContext';
import { baseProps } from './Menu';

export interface MenuItemProps extends baseProps {}

export const MenuItem: React.FC<MenuItemProps> = props => {
  const { className, style, children } = props;

  const { mode } = useContext(MenuContext);

  const classMenuItem = classNames(className, {
    [`m-menu-item-${mode}`]: true,
  });

  return (
    <li style={style} className={classMenuItem}>
      {children}
    </li>
  );
};
