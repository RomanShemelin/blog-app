import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StiskyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const content = <ToggleFeatures
    feature="isAppRedesigned"
    on={
      <StickyContentLayout
      left={<ViewSelectorContainer/>}
      right={<FiltersContainer/>}
      content={<Page
        data-testid="ArticlesPage"
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPageRedesigned, {}, [className])}
      >
        <ArticleInfiniteList className={cls.list}/>
      </Page>}/>
    }
    off={<Page
      data-testid="ArticlesPage"
      onScrollEnd={onLoadNextPart}
      className={classNames(cls.ArticlesPage, {}, [className])}
    >
      <ArticlesPageFilters/>
      <ArticleInfiniteList className={cls.list}/>
    </Page>}
  />

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
