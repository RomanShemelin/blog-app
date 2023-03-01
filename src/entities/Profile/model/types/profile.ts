import { type Country, type Currency } from 'shared/const/common'

export interface Profile {
  firstname: string
  lastname: string
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
