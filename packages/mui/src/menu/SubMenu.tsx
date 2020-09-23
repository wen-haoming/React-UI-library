import React, { useContext, CSSProperties, useState } from 'react';
import classNames from 'classnames';
import context, { ContextType } from './MenuContext';
import { ArrowUpBold } from 'mui2icons';
import { useReactive } from 'v-reactive-hooks';
import { baseProps } from './Menu';

export interface SubMenuProps extends baseProps {
  title: string;
}

const prefix = 'm-submenu';

export const SubMenu: React.FC<SubMenuProps> = props => {
  const { title, children, style, className = '' } = props;

  const { mode } = useContext<ContextType>(context);

  const state = useReactive({
    flag: false,
  });

  const classMenu = classNames(prefix, {
    [`${prefix}-${mode}`]: true,
    [className]: true,
  });

  const classTitle = classNames(`${prefix}-title`, {
    [`${prefix}-title-${mode}`]: true,
    [`${prefix}-title-inline-active`]: state.flag,
  });

  return (
    <li
      className={classMenu}
      style={style}
      onClick={() => (state.flag = !state.flag)}
    >
      <div className={classTitle}>
        <span>
          <span></span>
          <span>{title}</span>
        </span>
        <i className={`${prefix}-icon`}></i>
      </div>
      {/* 列表子组件 */}
      <ul className={`${prefix}-children`}>{children}</ul>
    </li>
  );
};
