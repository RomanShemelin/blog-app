import { classNames } from 'shared/lib/classNames/classNames';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next'
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';

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
        : <Text text={t('No comments')}/>
    }
    </VStack>
  );
}
