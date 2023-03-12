import { classNames } from 'shared/lib/class-names/class-names';
import cls from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links} />
    </div>
  );
};
