import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';

import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import { useState } from 'react';

interface StarRatingProps {
  className?: string
  onSelect?: (starCount: number) => void
  size?: number
  selectStars?: number
}

const stars = [1, 2, 3, 4, 5]

export function StarRating (props: StarRatingProps) {
  const { className, size = 30, selectStars = 0, onSelect } = props
  const [currentStarCount, setCurrentStarsCount] = useState(0)
  const [isSelected, setSelected] = useState(Boolean(selectStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setSelected(true)
    }
  }

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
            className={
                classNames(cls.StarIcon,
                  { [cls.selected]: isSelected }, [currentStarCount >= star ? cls.hovered : cls.normal])}
            Svg={StarIcon}
            key={star}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(star)}
            onClick={onClick(star)}
        />
      ))}
    </div>
  );
}
