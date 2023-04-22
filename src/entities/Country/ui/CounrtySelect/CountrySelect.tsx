import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.ARMENIA, content: Country.ARMENIA },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.UKRAINE, content: Country.UKRAINE }
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Country);
    }, [onChange]);

    return (
      <ListBox
        className={classNames('', {}, [className])}
        items={options}
        defaultValue={t('Choose country')}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
        label={t('Choose country')}
      />
    );
  }
);
