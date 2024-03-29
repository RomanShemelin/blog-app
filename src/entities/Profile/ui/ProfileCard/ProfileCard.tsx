
import { type Country } from '@/entities/Country/model/types/country';
import { type Currency } from '@/entities/Currency/model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { type Profile } from '../../model/types/profile';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
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

export function ProfileCard (props: ProfileCardProps) {
  const { isLoading, error } = props

  if (isLoading) {
    return (
      <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesignedSkeleton/>}
      off={<ProfileCardDeprecatedLoader/>}
    />
    )
  }
  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedError/>}
        off={<ProfileCardDeprecatedError/>}
      />
    )
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props}/>}
      off={<ProfileCardDeprecated {...props}/>}
    />

  );
}
