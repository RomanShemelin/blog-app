import { Page } from '@/widgets/Page/Page'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <Page data-testid="MainPage">
      {t('Main page')}
    </Page>
  )
}

export default MainPage
