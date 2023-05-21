import { classNames } from '@/shared/lib/classNames/classNames'

import { useTheme } from '@/app/providers/ThemeProvider'
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button'
import { memo, type PropsWithChildren } from 'react'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon/Icon'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(
  ({ className }: PropsWithChildren<ThemeSwitcherProps>) => {
    const { toggleTheme } = useTheme()

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Icon Svg={ThemeIcon} clicable onClick={toggleTheme} />}
        off={<Button
        theme={ButtonTheme.CLEAR}
        className={classNames('', {}, [className])}
        onClick={toggleTheme}
      >
          <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted/>
        </Button>}/>
    )
  }
)
