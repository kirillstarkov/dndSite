import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './button.module.scss';
import { ButtonProps } from './button.types';

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, square, size = 'm', ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };
  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
