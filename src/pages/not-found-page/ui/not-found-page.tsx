import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './not-found-page.module.scss';

interface NotFoundPageProps {
className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};
