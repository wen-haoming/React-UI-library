import React from 'react';
export declare type ButtonSize = 'large' | 'middle' | 'small';
export declare type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export declare enum ShapeType {
    Circle = "circle",
    Round = "round",
    Default = "default"
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
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnButtchoronProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
declare type ButtonProps = Partial<NativeButtonProps & AnButtchoronProps>;
export declare const Button: React.FC<ButtonProps>;
export {};
