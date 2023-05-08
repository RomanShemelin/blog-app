import { classNames } from '@/shared/lib/classNames/classNames';

import { EditableProfileCard } from '@/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Page } from '@/widgets/Page/Page';

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <VStack max gap='16'>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default ProfilePage;
