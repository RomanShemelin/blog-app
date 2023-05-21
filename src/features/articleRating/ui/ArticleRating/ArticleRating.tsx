import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Sceleton/Skeleton';
import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

function ArticleRating (props: ArticleRatingProps) {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ''
  });

  const [rateArticleMutation] = useRateArticle()

  const handleRateArticle = useCallback((starcount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starcount,
        feedback
      })
    } catch (e) {
      console.log(e)
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onAccept = useCallback((starcount: number, feedback?: string) => {
    handleRateArticle(starcount, feedback)
  }, [handleRateArticle])

  const onCancel = useCallback((starcount: number) => {
    handleRateArticle((starcount))
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton width='100%' height={120} />;
  }

  const rating = data?.[0]

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('Rate the article')}
      feedbackTitle={t(
        'Please leave your feedback about the article it will help improve the service'
      )}
      hasfeedback
    />
  );
}
export default ArticleRating
