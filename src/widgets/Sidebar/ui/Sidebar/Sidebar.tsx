import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

import { type PropsWithChildren, useState, memo, useMemo } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button'
import { SidebarItemList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: PropsWithChildren<SidebarProps>) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(() => SidebarItemList.map((item) => (
    <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
    />
  )), [collapsed]);
  return (
    <div
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
      <div className={cls.items}>
        {itemsList}

      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
})
