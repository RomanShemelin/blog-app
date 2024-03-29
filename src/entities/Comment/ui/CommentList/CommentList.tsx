import { classNames } from '@/shared/lib/classNames/classNames';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next'
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export function CommentList (props: PropsWithChildren<CommentListProps>) {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
      </VStack>
    )
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map((comment, index) => (
          <CommentCard isLoading={isLoading} comment={comment} key={index}/>
        ))
        : (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={ <Text text={t('No comments')}/>}
            off={ <TextDeprecated text={t('No comments')}/>}
          />

          )
    }
    </VStack>
  );
}
