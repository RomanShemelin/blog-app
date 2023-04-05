import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { Page } from 'widgets/Page/Page'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {t('Main page')}
      <ListBox/>
    </Page>
  )
}

export default MainPage
