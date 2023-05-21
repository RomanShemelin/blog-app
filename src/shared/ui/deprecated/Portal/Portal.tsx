import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function Portal ({ children, element = document.body }: PortalProps) {
  return createPortal(children, element)
}
