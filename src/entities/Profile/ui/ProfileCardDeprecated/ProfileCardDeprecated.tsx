import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';

import { useTranslation } from 'react-i18next'
import { type ProfileCardProps } from '../ProfileCard/ProfileCard';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Loader } from '@/shared/ui/deprecated/Loader/Loader';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text/Text';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation()
  return (
    <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [cls.error])}>
      <TextDeprecated
          theme={TextTheme.ERROR}
          title={t('an error occurred while loading the profile')}
          text={t('try refreshing the page')}
          align={TextAlign.CENTER}
          />
    </HStack>
  )
}

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, { [cls.loading]: true })}
    >
      <Loader/>
    </HStack>
  )
}

export function ProfileCardDeprecated (props: ProfileCardProps) {
  const {
    className,
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency
  } = props
  const { t } = useTranslation();
  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <VStack max gap="16" className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && <HStack justify="center" max className={cls.avatarWrapper}>
        <AvatarDeprecated src={data?.avatar}/>
      </HStack>
           }
      <InputDeprecated
              value={data?.firstname}
              placeholder={t('Name')}
              className={cls.input}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid={'ProfileCard.firstname'}
            />
      <InputDeprecated
              value={data?.lastname}
              placeholder={t('Surname')}
              className={cls.input}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid={'ProfileCard.lastname'}
            />
      <InputDeprecated
              value={data?.city}
              placeholder={t('City')}
              className={cls.input}
              onChange={onChangeCity}
              readonly={readonly}
              data-testid={'ProfileCard.city'}
            />
      <InputDeprecated
              value={data?.username}
              placeholder={t('Username')}
              className={cls.input}
              onChange={onChangeUsername}
              readonly={readonly}
              data-testid={'ProfileCard.username'}
            />
      <InputDeprecated
              value={data?.avatar}
              placeholder={t('Avatar')}
              className={cls.input}
              onChange={onChangeAvatar}
              readonly={readonly}
              data-testid={'ProfileCard.avatar'}
            />
      <CurrencySelect
              className={cls.input}
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
              data-testid={'ProfileCard.currency'}
            />
      <CountrySelect
              className={cls.input}
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
              data-testid={'ProfileCard.country'}
            />
    </VStack>
  )
}
