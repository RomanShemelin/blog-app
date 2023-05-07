import { Page } from '@/widgets/Page/Page';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Page data-testid={'AboutPage'}>
      {t('About')}
    </Page>
  )
};

export default AboutPage;
