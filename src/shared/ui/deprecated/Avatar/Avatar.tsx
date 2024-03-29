import { type CSSProperties, useMemo } from 'react';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '../../../assets/icons/user-filled.svg'
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Sceleton/Skeleton';

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
  fallbackInverted?: boolean
}

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function Avatar ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border={'50%'}/>
  const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} width={size} height={size}/>

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
}
