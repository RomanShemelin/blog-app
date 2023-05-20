import { classNames } from '@/shared/lib/classNames/classNames'

import { useTheme } from '@/app/providers/ThemeProvider'
import ThemeIcon from '@/shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { memo, type PropsWithChildren } from 'react'
import { Icon } from '@/shared/ui/Icon/Icon'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(
  ({ className }: PropsWithChildren<ThemeSwitcherProps>) => {
    const { toggleTheme } = useTheme()

    return (
      <Button
        theme={ButtonTheme.CLEAR}
        className={classNames('', {}, [className])}
        onClick={toggleTheme}
      >
        <Icon Svg={ThemeIcon} width={40} height={40} inverted/>
      </Button>
    )
  }
)
