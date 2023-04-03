import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next'
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';

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
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment, index) => (
          <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} key={index}/>
        ))
        : <Text text={t('No comments')}/>
    }
    </div>
  );
}
