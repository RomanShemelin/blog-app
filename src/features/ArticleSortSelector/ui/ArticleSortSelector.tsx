import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';

import { useMemo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { type SortOrder } from '@/shared/types/sort';
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select/Select';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export function ArticleSortSelector (
  props: PropsWithChildren<ArticleSortSelectorProps>
) {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('Ascending')
      },
      {
        value: 'desc',
        content: t('Descending')
      }
    ],
    [t]
  );
  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('Creation date')
      },
      {
        value: ArticleSortField.TITLE,
        content: t('Name')
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('Views')
      }
    ],
    [t]
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
        <VStack gap="8">
          <Text text={t('Sort')}/>
          <ListBox
            items={orderOptions}
            value={order}
            onChange={onChangeOrder}
        />
          <ListBox
            items={sortFieldOptions}
            value={sort}
            onChange={onChangeSort}
            className={cls.sort}
        />
        </VStack>
      </div>}
      off={<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          options={orderOptions}
          label={t('Sort')}
          value={order}
          onChange={onChangeOrder}
        />
        <Select
          options={sortFieldOptions}
          label={t('Sort')}
          value={sort}
          onChange={onChangeSort}
          className={cls.sort}
        />
      </div>}
    />

  );
}
