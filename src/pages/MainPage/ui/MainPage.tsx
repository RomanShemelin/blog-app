import { BugButton } from 'app/providers/ErrorBoundary'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }
  return (
    <div>
      <BugButton />
      {t('Main page')}
      <Input value={value} onChange={onChange} placeholder={t('Enter text')} />
    </div>
  )
}

export default MainPage
