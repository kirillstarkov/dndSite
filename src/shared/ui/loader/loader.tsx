import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div className={cls.container}>
      <div className={classNames(cls.spinner, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
