import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'

import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, themeButton } from '../Button/Button'

interface LangSwitcherProps {
  className?: string
}

export function LangSwitcher ({
  className
}: PropsWithChildren<LangSwitcherProps>) {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={themeButton.CLEAR}
      onClick={toggle}
    >
          {t('Язык')}
      </Button>
  )
}
