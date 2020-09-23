import React, {
  createContext,
  FC,
  CSSProperties,
  useMemo,
  useContext,
} from 'react';
import classNames from 'classnames';
import MenuContext, { ModeType, ContextType } from './MenuContext';
import { MenuItem, MenuItemProps } from './MenuItem';
import { SubMenu, SubMenuProps } from './SubMenu';

export interface baseProps {
  className?: string;
  style?: CSSProperties;
}

interface InternalProps extends baseProps {
  mode?: ModeType;
}

const InternalMenu: FC<InternalProps> = props => {
  const { style, children, className } = props;
  const { mode } = useContext<ContextType>(MenuContext);

  const classMenu = classNames('m-menu', className, {
    [`m-menu-${mode}`]: true,
  });

  return (
    <ul className={classMenu} style={{ ...style }}>
      {children}
    </ul>
  );
};

export interface SubComps {
  MenuItem: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
}

export type MenuProps = FC<InternalProps> & SubComps;

export const Menu: MenuProps = props => {
  const { mode = 'inline', ...resetProps } = props;

  const context = useMemo<ContextType>(() => {
    return {
      mode,
    };
  }, []);

  return (
    <MenuContext.Provider value={context}>
      <InternalMenu {...resetProps} />
    </MenuContext.Provider>
  );
};

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
