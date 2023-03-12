import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';
import { LangSwitcherProps } from './lang-switcher.types';
import cls from './lang-switcher.module.scss';

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();
  const toggle = () => { // MB this mus be async function
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme="clear"
      onClick={toggle}
      className={classNames(cls.langSwitcher, {}, [className])}
    >
      {t(short ? 'Short Lang' : 'Language')}
    </Button>
  );
};
