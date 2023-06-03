import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleFilters.module.scss';

import { type ArticleSortField, type ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { type SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import SearchIcon from '@/shared/assets/icons/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';

interface ArticleFiltersProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  type: ArticleType
  search: string
  onChangeSearch: (value: string) => void
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeType: (type: ArticleType) => void
}

export function ArticleFilters (props: ArticleFiltersProps) {
  const {
    className,
    sort,
    order,
    type,
    search,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType
  } = props;
  const { t } = useTranslation();

  return (
    <Card className={classNames(cls.ArticleFilters, {}, [className])} padding={'24'}>
      <VStack gap={'32'}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Search')}
          addonLeft={<Icon Svg={SearchIcon}/>}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
      </VStack>
    </Card>
  );
}
