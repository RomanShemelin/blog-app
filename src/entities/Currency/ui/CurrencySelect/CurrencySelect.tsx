
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR }
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency);
    }, [onChange]);

    return (
      <ListBox
      className={className}
      value={value}
      defaultValue={t('Choose currency')}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Choose currency')}
      />
    )
  }
);
