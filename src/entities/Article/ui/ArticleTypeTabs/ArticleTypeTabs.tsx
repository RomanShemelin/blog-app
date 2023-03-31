import { classNames } from 'shared/lib/classNames/classNames';

import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next'
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export function ArticleTypeTabs (props: PropsWithChildren<ArticleTypeTabsProps>) {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('ALL')
    },
    {
      value: ArticleType.IT,
      content: t('IT')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('ECONOMICS')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('SCIENCE')
    }
  ], [t])
  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  return (
    <Tabs
        tabs={typeTabs}
        value={value}
        onTabClick={onTabClick}
        className={classNames('', {}, [className])}
    />
  );
}
