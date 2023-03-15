import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
  className?: string
}

function ArticlesPage (props: ArticlesPageProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('Articles Page')}
    </div>
  );
}
export default memo(ArticlesPage)
