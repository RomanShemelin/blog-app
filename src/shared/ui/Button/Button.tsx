import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export enum themeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: themeButton;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
