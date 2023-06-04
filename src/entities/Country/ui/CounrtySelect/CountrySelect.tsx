import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups/ui/ListBox/ListBox';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
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

    const props = {
      className,
      items: options,
      defaultValue: t('Choose country'),
      value,
      onChange: onChangeHandler,
      readonly,
      label: t('Choose country'),
      direction: 'top right' as const
    }

    return (
      <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...props}/>}
      off={<ListBoxDeprecated {...props}/>}
    />
    );
  }
);
