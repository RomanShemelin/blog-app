import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';

import { ArticleView, type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleLIstItemSkeleton';
import { t } from 'i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export function ArticleList (props: ArticleListProps) {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props;

  const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} className={cls.card}/>
  )
  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Article not found')}/>
      </div>
    );
  }

  return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    {articles.length > 0
      ? articles.map(renderArticle)
      : null
}
    {isLoading && getSkeletons(view)}
  </div>;
}
