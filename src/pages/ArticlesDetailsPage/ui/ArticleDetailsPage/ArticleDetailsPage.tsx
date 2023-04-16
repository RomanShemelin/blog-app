import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { ArticleRecommendationList } from 'features/articleRecommendationList';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticlesDetailsComments } from '../ArticlesDetailsComments/ArticlesDetailsComments';
import cls from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader/>
          <ArticleDetails id={id} />
          <ArticleRecommendationList/>
          <ArticlesDetailsComments id={id}/>
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
