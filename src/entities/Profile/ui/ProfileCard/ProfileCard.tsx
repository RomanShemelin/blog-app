import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string
}

export function ProfileCard (props: PropsWithChildren<ProfileCardProps>) {
  const { className } = props;
  const { t } = useTranslation();
  const data = useSelector(getProfileData);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.OUTlINE} className={cls.editBtn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Surname')}
          className={cls.input}
        />
      </div>
    </div>
  );
}
