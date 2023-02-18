import { classNames } from 'shared/lib/classNames/classNames'

import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export function LangSwitcher ({
  className,
  short
}: PropsWithChildren<LangSwitcherProps>) {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
          {t(short ? 'Короткий язык' : 'Язык')}
      </Button>
  )
}
