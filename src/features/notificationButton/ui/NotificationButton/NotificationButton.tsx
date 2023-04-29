import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

import { NotificationList } from '@/entities/Notification';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
  className?: string
}

export function NotificationButton (props: NotificationButtonProps) {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
}
