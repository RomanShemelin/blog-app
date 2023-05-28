import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';

import type { PropsWithChildren } from 'react';
import { type Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Skeleton } from '@/shared/ui/deprecated/Sceleton/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import { getRouteProfile } from '@/shared/config/routeConfig/routeConfig';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export function CommentCard (props: PropsWithChildren<CommentCardProps>) {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        gap="8"
        max
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={'50%'}/>
          <Skeleton width={100} height={16} className={cls.username}/>
        </div>
        <Skeleton width={'100%'} height={50} className={cls.text}/>
      </VStack>
    )
  }
  if (!comment) {
    return null
  }

  return (
    <VStack
      data-testid="CommentCard.Content"
      gap="8"
      max
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
        <Text className={cls.username} title={comment.user.username}/>
      </AppLink>
      <Text className={cls.text} text={comment.text}/>
    </VStack>
  );
}
