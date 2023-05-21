import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Modal.module.scss'

import { useTheme } from '@/app/providers/ThemeProvider'
import {
  type PropsWithChildren,
  type ReactNode
} from 'react'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function Modal (props: PropsWithChildren<ModalProps>) {
  const { className, children, isOpen, onClose, lazy } = props
  const {
    close,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen
  })
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isMounted) { return null }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close}/>
        <div className={cls.overlay}>
          <div
               className={cls.content}
               >{children}</div>
        </div>
      </div>
    </Portal>
  )
}
