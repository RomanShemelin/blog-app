import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';

import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon as IconDeprecated } from '../Icon/Icon';
import { useState } from 'react';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';

interface StarRatingProps {
  className?: string
  onSelect?: (starCount: number) => void
  size?: number
  selectStars?: number
}

const stars = [1, 2, 3, 4, 5];

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function StarRating (props: StarRatingProps) {
  const { className, size = 30, selectStars = 0, onSelect } = props;
  const [currentStarCount, setCurrentStarsCount] = useState(selectStars);
  const [isSelected, setSelected] = useState(Boolean(selectStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setSelected(true);
    }
  };

  return (
    <div className={classNames(toggleFeatures({
      name: 'isAppRedesigned', off: () => cls.StarRating, on: () => cls.StarRatingRedesigned
    }), {}, [className])}>
      {stars.map((star) => {
        const commonProps = {
          className: classNames(cls.StarIcon, { [cls.selected]: isSelected }, [
            currentStarCount >= star ? cls.hovered : cls.normal
          ]),
          Svg: StarIcon,
          key: star,
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(star),
          onClick: onClick(star),
          'data-test': `StarRating.${star}`,
          'data-selected': currentStarCount >= star
        }
        return (
          // eslint-disable-next-line react/jsx-key
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <Icon
              clicable={!isSelected}
                {...commonProps}
              />}
            off={
              <IconDeprecated
                {...commonProps}
              />}
          />

        )
      })}
    </div>
  );
}
