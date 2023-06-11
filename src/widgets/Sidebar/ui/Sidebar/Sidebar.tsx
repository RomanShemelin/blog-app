import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button/Button'
import { LangSwitcher } from '@/shared/ui/deprecated/LangSwitcher/LangSwitcher'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { memo, useMemo, useState, type PropsWithChildren } from 'react'
import { useSideBarItems } from '../../model/selectors/getSideBarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: PropsWithChildren<SidebarProps>) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemList = useSideBarItems()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
    />
  )), [collapsed, sidebarItemList]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<aside
        data-testid="sidebar"
        className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [
          className
        ])}
      >
        <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo}/>
        <VStack role={'navigation'} gap="8" className={cls.items}>
          {itemsList}
        </VStack>
        <Icon
              data-testid="sidebar-toggle"
              onClick={onToggle}
              className={cls.collapseBtn}
              Svg={ArrowIcon}
              clicable
              >
        </Icon>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={collapsed} className={cls.lang} />
        </div>
      </aside>
      }
      off={<aside
        data-testid="sidebar"
        className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
          className
        ])}
      >
        <Button
              data-testid="sidebar-toggle"
              onClick={onToggle}
              className={cls.collapseBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              square
              size={ButtonSize.L}
              >
          {collapsed ? '>' : '<'}
        </Button>
        <VStack role={'navigation'} gap="8" className={cls.items}>
          {itemsList}
        </VStack>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={collapsed} className={cls.lang} />
        </div>
      </aside>}
    />
  )
})
