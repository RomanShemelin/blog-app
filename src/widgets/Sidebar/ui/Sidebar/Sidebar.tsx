import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

import { type PropsWithChildren, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export function Sidebar (props: PropsWithChildren<SidebarProps>) {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
      <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
          <button data-testid="sidebar-toggle" onClick={onToggle}>
              {t('toggle')}
          </button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  )
}
