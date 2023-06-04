
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const props = {
      className,
      value,
      defaultValue: t('Choose currency'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      label: t('Choose currency'),
      direction: 'top right' as const
    }

    return (<ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...props
      }/>}
      off={<ListBoxDeprecated {...props}/>}
    />
    )
  }
);
