import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';

interface NotificationButtonProps {
  className?: string
}

export function NotificationButton (props: NotificationButtonProps) {
  const { className } = props;

  return (
    <div>
      <Popover
        className={classNames(cls.NotificationButton, {}, [className])}
        trigger={
          <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
          </Button>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    </div>
  );
}
