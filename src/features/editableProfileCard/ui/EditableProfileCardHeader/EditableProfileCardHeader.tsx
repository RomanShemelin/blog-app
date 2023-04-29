import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string
}

export function EditableProfileCardHeader (
  props: EditableProfileCardHeaderProps
) {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

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
    <HStack max justify='between' className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTlINE}
                onClick={onEdit}
                data-testid={'EditableProfileCardHeader.EditButton'}
              >
                {t('Edit')}
              </Button>
              )
            : (
              <HStack gap='8'>
                <Button
                  theme={ButtonTheme.OUTlINE_RED}
                  onClick={onCancelEdit}
                  data-testid={'EditableProfileCardHeader.CancelButton'}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTlINE}
                  onClick={onSave}
                  data-testid={'EditableProfileCardHeader.SaveButton'}
                 >
                  {t('Save')}
                </Button>
              </HStack>
              )}
        </>
      )}
    </HStack>
  );
}
