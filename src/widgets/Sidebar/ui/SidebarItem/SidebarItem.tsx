import cls from './SidebarItem.module.scss'

import { getUserAuthData } from '@/entities/User'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink/AppLink'
import { type SidebarItemType } from '../../model/types/sidebar'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props
  const isAuth = useSelector(getUserAuthData)
  const { t } = useTranslation()

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={ <AppLink
        to={item.path}
        className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
        activeClassName={cls.active}
      >
        <Icon Svg={item.Icon}/>
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>}
      off={ <AppLinkDeprecated
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLinkDeprecated>}
    />

  )
})
