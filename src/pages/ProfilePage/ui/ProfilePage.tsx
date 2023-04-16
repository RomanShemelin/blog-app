import { classNames } from 'shared/lib/classNames/classNames';

import { EditableProfileCard } from 'features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  if (!id) return <Text text={t('Profile not found')}/>;

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack max gap='16'>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default ProfilePage;
