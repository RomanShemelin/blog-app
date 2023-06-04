import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { Skeleton } from '@/shared/ui/redesigned/Sceleton/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { useTranslation } from 'react-i18next';
import { type ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation()
  return (
    <HStack justify="center">
      <Text
            variant="error"
            title={t('an error occurred while loading the profile')}
            text={t('try refreshing the page')}
            align='center'
            />
    </HStack>
  )
}

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding="24" max>
      <VStack gap="32">
        <HStack max justify="center">
          <Skeleton border="100%" width={128} height={128}/>
        </HStack>
        <HStack gap="32" max>
          <VStack gap="16" max>
            <Skeleton width='100%' height={38}/>
            <Skeleton width='100%' height={38}/>
            <Skeleton width='100%' height={38}/>
            <Skeleton width='100%' height={38}/>
          </VStack>
          <VStack gap="16" max>
            <Skeleton width='100%' height={38}/>
            <Skeleton width='100%' height={38}/>
            <Skeleton width='100%' height={38}/>
            <Skeleton width='100%' height={38}/>
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
}

export function ProfileCardRedesigned (props: ProfileCardProps) {
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
  } = props;
  const { t } = useTranslation();

  return (
    <Card
      padding='24'
      max
      className={className}
    >
      <VStack gap='32'>
        {data?.avatar && (
          <HStack justify='center' max>
            <Avatar size={120} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap='24' align='start' max>
          <VStack gap='16' max>
            <Input
              value={data?.firstname}
              label={t('Name')}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid={'ProfileCard.firstname'}
            />
            <Input
              value={data?.lastname}
              label={t('Surname')}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid={'ProfileCard.lastname'}
            />
            <Input
              value={data?.city}
              label={t('City')}
              onChange={onChangeCity}
              readonly={readonly}
              data-testid={'ProfileCard.city'}
            />
            <Input
              value={data?.username}
              label={t('Username')}
              onChange={onChangeUsername}
              readonly={readonly}
              data-testid={'ProfileCard.username'}
            />
          </VStack>
          <VStack gap='16' max>
            <Input
              value={data?.avatar}
              label={t('Avatar')}
              onChange={onChangeAvatar}
              readonly={readonly}
              data-testid={'ProfileCard.avatar'}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
              data-testid={'ProfileCard.currency'}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
              data-testid={'ProfileCard.country'}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
}
