import { useCallback, useEffect, useRef, useState, type MutableRefObject } from 'react';

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay: number
}

export function useModal (props: UseModalProps) {
  const { onClose, isOpen, animationDelay } = props
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timeRef = useRef() as MutableRefObject <ReturnType<typeof setTimeout>>

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isOpen, onKeydown]);

  return {
    isClosing,
    isMounted,
    close
  }
}
