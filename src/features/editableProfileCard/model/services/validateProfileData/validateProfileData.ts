import { type Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }
  const { firstname, lastname, city } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors
};
