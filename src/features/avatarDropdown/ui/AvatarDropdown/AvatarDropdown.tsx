import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';

import { useTranslation } from 'react-i18next';
import { Dropdown } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from 'entities/User';

interface AvatarDropdownProps {
  className?: string
}

export function AvatarDropdown (props: AvatarDropdownProps) {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }
  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t('Admin panel'), href: RoutePath.admin_panel }]
          : []),
        { content: t('Profile'), href: RoutePath.profile + authData.id },
        { content: t('Logout'), onClick: onLogout }
      ]}
    />
  );
}
