import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './app-link.module.scss';

type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    theme = 'secondary',
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
