import { classNames } from '@/shared/lib/classNames/classNames';

import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsloading/getProfileIsloading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ValidateProfileError } from '../../model/consts/consts';

interface EditableProfileCardProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

export function EditableProfileCard (props: EditableProfileCardProps) {
  const { className, id } = props;
  const { t } = useTranslation()
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateProfileErrors = useSelector(getProfileValidateErrors);

  const validateTranslateErrors = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'First and last name are required'
    ),
    [ValidateProfileError.INCORRECT_CITY]: t('Enter city'),
    [ValidateProfileError.NO_DATA]: t('No data provided')
  };
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvater = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8" max className={classNames('', {}, [className])}>
        <EditableProfileCardHeader />
        {validateProfileErrors?.length && validateProfileErrors.map(error => (
          <Text
         theme={TextTheme.ERROR}
         text={validateTranslateErrors[error]}
         key={error}
         data-testid='EditableProfileCard.Error'
        />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvater}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          />
      </VStack >
    </DynamicModuleLoader>
  );
}
