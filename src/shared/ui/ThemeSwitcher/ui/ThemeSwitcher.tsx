import { classNames } from 'shared/lib/classNames/classNames'

import type { PropsWithChildren } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, themeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export function ThemeSwitcher ({
  className
}: PropsWithChildren<ThemeSwitcherProps>) {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button
      theme={themeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
          {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
  )
}
