import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'

import {
  type PropsWithChildren,
  type ReactNode, useEffect,
  useRef, useState, useCallback
} from 'react'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export function Modal (props: PropsWithChildren<ModalProps>) {
  const { className, children, isOpen, onClose } = props

  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler()
    }
  }, [onCloseHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
    }
    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen, onKeydown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
              <div className={cls.overlay} onClick={onCloseHandler}>
                  <div
               className={cls.content}
               onClick={onContentClick}>{children}</div>
              </div>
          </div>
      </Portal>
  )
}
