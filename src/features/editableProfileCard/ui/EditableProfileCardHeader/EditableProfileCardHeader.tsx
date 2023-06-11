import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

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
    <ToggleFeatures
    feature="isAppRedesigned"
    on={
      <Card border="round" padding="24" max>
        <HStack max justify='between' className={classNames('', {}, [className])}>
          <Text title={t('Profile')} />
          {canEdit && (
          <>
            {readonly
              ? (
                <Button
              variant="outline"
              onClick={onEdit}
              data-testid={'EditableProfileCardHeader.EditButton'}
            >
                  {t('Edit')}
                </Button>
                )
              : (
                <HStack gap='8'>
                  <Button
                onClick={onCancelEdit}
                data-testid={'EditableProfileCardHeader.CancelButton'}
                color={'error'}
              >
                    {t('Cancel')}
                  </Button>
                  <Button
                variant="outline"
                onClick={onSave}
                data-testid={'EditableProfileCardHeader.SaveButton'}
                color={'succes'}
               >
                    {t('Save')}
                  </Button>
                </HStack>
                )}
          </>
          )}
        </HStack>
      </Card>}
    off={<HStack max justify='between' className={classNames('', {}, [className])}>
      <TextDeprecated title={t('Profile')} />
      {canEdit && (
      <>
        {readonly
          ? (
            <ButtonDeprecated
              theme={ButtonTheme.OUTlINE}
              onClick={onEdit}
              data-testid={'EditableProfileCardHeader.EditButton'}
            >
              {t('Edit')}
            </ButtonDeprecated>
            )
          : (
            <HStack gap='8'>
              <ButtonDeprecated
                theme={ButtonTheme.OUTlINE_RED}
                onClick={onCancelEdit}
                data-testid={'EditableProfileCardHeader.CancelButton'}
              >
                {t('Cancel')}
              </ButtonDeprecated>
              <ButtonDeprecated
                theme={ButtonTheme.OUTlINE}
                onClick={onSave}
                data-testid={'EditableProfileCardHeader.SaveButton'}
               >
                {t('Save')}
              </ButtonDeprecated>
            </HStack>
            )}
      </>
      )}
    </HStack>}
    />

  );
}
