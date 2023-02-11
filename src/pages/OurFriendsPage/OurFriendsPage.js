import { PagesTitle } from 'components/PagesTitle/PagesTitle';
import { Container } from 'components/Container/Container';
import { OurFriends } from 'components/Friends';

const OurFriendsPage = () => {
  return (
    <section>
      <Container>
        <PagesTitle>Our friends</PagesTitle>
        <OurFriends />
      </Container>
    </section>
  );
};
export default OurFriendsPage;
