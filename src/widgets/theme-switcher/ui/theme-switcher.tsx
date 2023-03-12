import { useTheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names/class-names';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/button/button';
import cls from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme="clear"
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
