import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { memo } from 'react';

interface scrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
  const { className } = props;

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Icon
      Svg={CircleIcon}
      clicable
      onClick={onClick}
      width={32}
      height={32}
      className={className}
    />
  );
})
