import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'large' | 'middle' | 'small';

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';

export enum ShapeType {
  Circle = 'circle',
  Round = 'round',
  Default = 'default',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  danger?: boolean;
  shape?: ShapeType;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnButtchoronProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

type ButtonProps = Partial<NativeButtonProps & AnButtchoronProps>;

export const Button: React.FC<ButtonProps> = props => {
  const {
    btnType,
    disabled,
    size,
    children,
    href,
    className,
    danger,
    shape,
    ...restProps
  } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-danger`]: danger,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  danger: false,
  btnType: 'default',
  shape: ShapeType.Default,
};
