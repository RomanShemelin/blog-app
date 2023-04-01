import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';

import AddCommentForm from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { articleDetailsPageReducer } from 'pages/ArticlesDetailsPage/model/slices';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecomendationsIsLoading } from '../../model/selectors/recomendations';
import {
  addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecomendation } from '../../model/services/fetchArticleRecomendation/fetchArticleRecomendation';
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleRecomendations } from '../../model/slices/articleDetailsRecomendationSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
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
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recomendations = useSelector(getArticleRecomendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recomendationsIsLoading = useSelector(getArticleRecomendationsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecomendation())
  });

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
        <ArticleDetailsPageHeader/>
        <ArticleDetails id={id} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle} title={t('Recomend')}
         />
        <ArticleList
          articles={recomendations}
          isLoading={recomendationsIsLoading}
          className={cls.recomendations}
          target={'_blank'}
          />
        <Text
          size={TextSize.L}
          className={cls.commentTitle} title={t('Comments')}
         />
        <AddCommentForm onSendComment={onSendComment}/>
        <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
