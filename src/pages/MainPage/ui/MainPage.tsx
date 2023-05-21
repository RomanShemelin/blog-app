import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/deprecated/StarRating/StarRating'
import { RatingCard } from '@/entities/Rating'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <Page data-testid="MainPage">
      {t('Main page')}
      <StarRating/>
      <RatingCard title="Оставить отзыв" feedbackTitle="Оставьте отзыв о статье"/>
    </Page>
  )
}

export default MainPage
