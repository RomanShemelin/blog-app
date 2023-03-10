import { type Country } from 'entities/Country/model/types/country';
import { type Currency } from 'entities/Currency';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA ',
  INCORRECT_CITY = 'INCORRECT_CITY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
  firstname?: string
  lastname?: string
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateError?: ValidateProfileError[]
}
