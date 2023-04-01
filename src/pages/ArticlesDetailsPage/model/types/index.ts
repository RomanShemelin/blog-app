import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { type ArticleDetailsRecomendationSchema } from './ArticleDetailsRecomendationSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recomendations: ArticleDetailsRecomendationSchema
}
