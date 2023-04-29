import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  firstname: 'Igor',
  lastname: 'Potov',
  country: Country.RUSSIA,
  city: 'Moscow',
  currency: Currency.RUB
};

describe('validateProfileData.test', () => {
  test('succes', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });
  test('without firstname and lastname', async () => {
    const result = validateProfileData({
      ...data,
      firstname: '',
      lastname: ''
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test('without city', async () => {
    const result = validateProfileData({ ...data, city: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });
  test('incorrect all', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_CITY
    ]);
  });
});
