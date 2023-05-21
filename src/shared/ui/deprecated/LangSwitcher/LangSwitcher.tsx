import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../redesigned/Button/Button';
import { Button as ButtonDeprecated, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<Button variant="clear">{t(short ? 'Короткий язык' : 'Язык')}</Button>}
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggle}
        >
          {t(short ? 'Короткий язык' : 'Язык')}
        </ButtonDeprecated>
      }
    />
  );
});
