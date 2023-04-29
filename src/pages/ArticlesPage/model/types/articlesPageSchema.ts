import { type EntityState } from '@reduxjs/toolkit';
import { type ArticleSortField, type Article, type ArticleView, type ArticleType } from '@/entities/Article';
import { type SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  // paginatiom
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType
  _inited: boolean
}
