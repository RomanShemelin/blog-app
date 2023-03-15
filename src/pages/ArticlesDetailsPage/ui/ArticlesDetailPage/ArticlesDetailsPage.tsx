import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string
}

function ArticleDetailsPage (
  props: ArticleDetailsPageProps
) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t('Article Details Page')}
    </div>
  );
}
export default memo(ArticleDetailsPage)
