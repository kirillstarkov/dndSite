import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route-config/route-config';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink } from 'shared/ui/app-link/app-link';
import { Button } from 'shared/ui/button/button';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import cls from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        <AppLink to={RoutePath.main} className={cls.link}>
          <HomeIcon className={cls.icon} />
          <span className={cls.linkText}>{t('Main Page')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={cls.link}>
          <AboutIcon className={cls.icon} />
          <span className={cls.linkText}>{t('About Page')}</span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme="backgroundInverted"
        square
        size="l"
      >
        {collapsed ? '>' : '<'}

      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
