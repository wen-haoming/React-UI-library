import React from 'react';
import { Menu } from '../Menu';

const { SubMenu, MenuItem } = Menu;

export default () => {
  return (
    <Menu style={{ width: 250 }}>
      <SubMenu title="title1">
        <MenuItem>11111</MenuItem>
      </SubMenu>
      <SubMenu title="title2">
        <MenuItem>22222</MenuItem>
      </SubMenu>
      <SubMenu title="title3">
        <MenuItem>3333</MenuItem>
      </SubMenu>
    </Menu>
  );
};
