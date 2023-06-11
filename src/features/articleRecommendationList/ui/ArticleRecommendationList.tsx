import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleList } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text/Text';
import { useArticleRecommendationList } from '../api/articleRecommendationApi';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

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
    <VStack
      data-testid="ArticleRecommendationsList"
      gap='8'
      max className={classNames('', {}, [className])}
    >
      <ToggleFeatures
      feature="isAppRedesigned"
      on={<Text size='l' title={t('Recomend')} />}
      off={<TextDeprecated size={TextSize.L} title={t('Recomend')} />}
      />
      <ArticleList articles={articles} target={'_blank'} />
    </VStack>
  );
}
