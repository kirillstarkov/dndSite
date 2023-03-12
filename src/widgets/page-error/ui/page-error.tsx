import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui/button/button';
import cls from './page-error.module.scss';

interface PageErrorProps {
className?: string;
}

export const PageError: FC<PageErrorProps> = (props: PageErrorProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>
        {t('Unexpected Error occured')}
      </p>
      <Button onClick={reloadPage}>
        {t('Reload page')}
      </Button>
    </div>
  );
};
