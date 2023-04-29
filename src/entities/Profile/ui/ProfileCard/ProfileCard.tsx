import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { type Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { type Currency } from '@/entities/Currency/model/types/currency';
import { CurrencySelect } from '@/entities/Currency';
import { type Country } from '@/entities/Country/model/types/country';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void

}

export function ProfileCard ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCountry,
  onChangeCurrency
}: ProfileCardProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader/>
      </div>
    )
  }
  if (error) {
    return (
      <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('an error occurred while loading the profile')}
          text={t('try refreshing the page')}
          align={TextAlign.CENTER}
          />
      </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly

  }

  return (
    <VStack max gap="16" className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && <HStack justify="center" max className={cls.avatarWrapper}>
        <Avatar src={data?.avatar}/>
        </HStack>
       }
      <Input
          value={data?.firstname}
          placeholder={t('Name')}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
          data-testid={'ProfileCard.firstname'}
        />
      <Input
          value={data?.lastname}
          placeholder={t('Surname')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
          data-testid={'ProfileCard.lastname'}
        />
      <Input
          value={data?.city}
          placeholder={t('City')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
          data-testid={'ProfileCard.city'}
        />
      <Input
          value={data?.username}
          placeholder={t('Username')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
          data-testid={'ProfileCard.username'}
        />
      <Input
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
  );
}
