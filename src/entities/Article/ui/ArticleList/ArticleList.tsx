import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';

import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { t } from 'i18next';
import { Text, TextSize } from '@/shared/ui/deprecated/Text/Text';
import { type HTMLAttributeAnchorTarget } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export function ArticleList (props: ArticleListProps) {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;

  const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      className={cls.card}
      target={target}/>
  )
  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Article not found')}/>
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<HStack
        wrap="wrap"
        gap="16"
        className={classNames(cls.ArticleListRedesigned, {}, [])}
        data-testid={'ArticleList'}
        >
        {articles.length > 0
          ? articles.map(renderArticle)
          : null
    }
        {isLoading && getSkeletons(view)}
      </HStack>}
      off={<div
        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        data-testid={'ArticleList'}
        >
        {articles.length > 0
          ? articles.map(renderArticle)
          : null
    }
        {isLoading && getSkeletons(view)}
      </div>}
    />

  )
}
