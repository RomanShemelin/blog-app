import { classNames } from 'shared/lib/classNames/classNames';

import { type PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
  className?: string
}

export function ProfilePageHeader (
  props: PropsWithChildren<ProfilePageHeaderProps>
) {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <>
          {readonly
            ? (
              <Button theme={ButtonTheme.OUTlINE} onClick={onEdit}>
                {t('Edit')}
              </Button>
              )
            : (
              <HStack gap="8">
                <Button theme={ButtonTheme.OUTlINE_RED} onClick={onCancelEdit}>
                  {t('Cancel')}
                </Button>
                <Button theme={ButtonTheme.OUTlINE} onClick={onSave}>
                  {t('Save')}
                </Button>

              </HStack>
              )}
          </>
      )}
    </HStack>
  );
}
