import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

import { memo, useMemo, useState, type PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { getSideBarItems } from '../../model/selectors/getSideBarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: PropsWithChildren<SidebarProps>) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemList = useSelector(getSideBarItems)

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
    <menu
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
    </menu>
  )
})
