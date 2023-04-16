import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import AddCommentForm from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useCallback } from 'react';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticlesDetailsCommentsProps {
  className?: string
  id: string
}

export function ArticlesDetailsComments (props: ArticlesDetailsCommentsProps) {
  const { className, id } = props;
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <div className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Comments')}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div>
  );
}
