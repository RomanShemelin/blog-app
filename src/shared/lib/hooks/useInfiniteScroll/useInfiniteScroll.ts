import { useEffect, type MutableRefObject } from 'react';

export interface UseInfiniteScrollOption {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll ({
  callback,
  triggerRef,
  wrapperRef
}: UseInfiniteScrollOption) {
  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current
    let observer: IntersectionObserver | null = null
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0
      };

      observer = new IntersectionObserver(([enrty]) => {
        if (enrty.isIntersecting) {
          callback()
        }
      }, options);
      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
