import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleList } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { useArticleRecommendationList } from '../api/articleRecommendationApi';

interface ArticleRecommendationListProps {
  className?: string
}

export function ArticleRecommendationList (
  props: ArticleRecommendationListProps
) {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationList(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <VStack gap='8' max className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Recomend')} />
      <ArticleList articles={articles} target={'_blank'} />
    </VStack>
  );
}
