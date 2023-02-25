import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'

import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export function LoginForm (props: PropsWithChildren<LoginFormProps>) {
  const { className } = props
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Input type="text" className={cls.input} placeholder={t('Enter username')}/>
          <Input type="text" className={cls.input} placeholder={t('Enter password')}/>
          <Button className={cls.loginBtn}>{t('Enter')}</Button>
      </div>
  )
}
