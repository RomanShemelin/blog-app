import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbidenPage = () => {
  const { t } = useTranslation();
  return <Page>{t('Access to this page is closed')}</Page>;
};

export default ForbidenPage;
