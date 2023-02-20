import { PagesTitle } from 'components/PagesTitle/PagesTitle';
import { Container } from 'components/Container/Container';
import { OurFriends } from 'components/Friends';
import { OurFriendsSection } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  return (
    <OurFriendsSection>
      <Container>
        <PagesTitle>Our friends</PagesTitle>
        <OurFriends />
      </Container>
    </OurFriendsSection>
  );
};

export default OurFriendsPage;
