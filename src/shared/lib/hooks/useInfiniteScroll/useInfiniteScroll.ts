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
    let observer: IntersectionObserver | null = null
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0
      };

      observer = new IntersectionObserver(([enrty]) => {
        if (enrty.isIntersecting) {
          callback()
        }
      }, options);
      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
