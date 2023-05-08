import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasfeedback?: boolean
  onCancel?: (starCount: number) => void
  onAccept?: (starcount: number, feedback?: string) => void
  rate?: number
}

export function RatingCard (props: RatingCardProps) {
  const {
    className,
    feedbackTitle,
    hasfeedback,
    onAccept,
    title,
    rate = 0
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasfeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
      setIsModalOpen(true);
    },
    [hasfeedback, onAccept]
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount);
  }, [onAccept, starsCount]);

  const modalContent = (
    <VStack max gap='32'>
      <Text title={feedbackTitle} />
      <Input
        data-testid="RatingCard.Input"
        value={feedback}
        onChange={setFeedback}
        placeholder={t('your feedback')}
      />
      <HStack max gap='16' justify='end'>
        <Button
          data-testid="RatingCard.Close"
          onClick={cancelHandle}
          theme={ButtonTheme.OUTlINE_RED}
        >
          {t('Close')}
        </Button>
        <Button
          data-testid="RatingCard.Send"
          onClick={acceptHandle}
        >{
        t('Send')}
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Card data-testid="RatingCard" className={className} max>
      <VStack align='center' gap='8'>
        <Text title={starsCount ? t('Thank you for rating') : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectStars={starsCount}
        />
      </VStack>
      <Modal isOpen={isModalOpen}></Modal>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          {modalContent}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          {modalContent}
        </Drawer>
      </MobileView>
    </Card>
  );
}
