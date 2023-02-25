import { classNames } from 'shared/lib/classNames/classNames'

import type { PropsWithChildren } from 'react'
import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export function LoginModal ({
  className,
  isOpen,
  onClose
}: PropsWithChildren<LoginModalProps>) {
  return (
      <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
          <LoginForm />
      </Modal>
  )
}
