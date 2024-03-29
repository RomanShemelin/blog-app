
import { Skeleton } from '@/shared/ui/deprecated/Sceleton/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string
}

export function NotificationList (props: NotificationListProps) {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000
  });

  if (isLoading) {
    return (
      <VStack
        gap='16'
        max
        className={className}
      >
        <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
        <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
        <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
      </VStack>
    );
  }

  return (
    <VStack
      gap='16'
      className={className}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
}
