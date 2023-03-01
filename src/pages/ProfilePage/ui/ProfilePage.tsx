import { classNames } from 'shared/lib/classNames/classNames'

import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: PropsWithChildren<ProfilePageProps>) => {
  const { className } = props
  const { t } = useTranslation()

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [className])}>{t('PROFILE PAGE')}</div>
      </DynamicModuleLoader>
  )
}
export default ProfilePage
