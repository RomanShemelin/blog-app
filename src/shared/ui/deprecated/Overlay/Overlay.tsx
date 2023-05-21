import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string
  onClick?: () => void
}

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function Overlay (props: OverlayProps) {
  const { className, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(cls.Overlay, {}, [className])}
    ></div>
  );
}
