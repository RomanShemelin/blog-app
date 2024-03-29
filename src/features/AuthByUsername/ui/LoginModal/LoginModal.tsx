import { classNames } from '@/shared/lib/classNames/classNames'

import { type PropsWithChildren, Suspense } from 'react'
import { Modal } from '@/shared/ui/redesigned/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from '@/shared/ui/deprecated/Loader/Loader'

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose}/>
      </Suspense>
    </Modal>
  )
}
