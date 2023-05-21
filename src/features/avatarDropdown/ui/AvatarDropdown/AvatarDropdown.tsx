
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/deprecated/Popups';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

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
      className={className}
      trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t('Admin panel'), href: getRouteAdmin() }]
          : []),
        { content: t('Profile'), href: getRouteProfile(authData.id) },
        { content: t('Logout'), onClick: onLogout }
      ]}
    />
  );
}
