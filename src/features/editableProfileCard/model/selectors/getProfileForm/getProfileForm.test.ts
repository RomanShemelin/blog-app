import { type StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
  test('should return form data', () => {
    const data = {
      username: 'admin',
      firstname: 'Igor',
      lastname: 'Potov',
      country: Country.RUSSIA,
      city: 'Moscow',
      currency: Currency.RUB
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
