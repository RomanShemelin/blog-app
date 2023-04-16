import { type Country } from 'entities/Country/model/types/country';
import { type Currency } from 'entities/Currency';

export interface Profile {
  id?: string
  firstname?: string
  lastname?: string
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}
