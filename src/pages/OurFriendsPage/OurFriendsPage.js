import { PagesTitle } from 'components/PagesTitle/PagesTitle';
import { Container } from 'components/Container/Container';
import { OurFriends } from 'components/Friends';

const OurFriendsPage = () => {
  return (
    <section style={{ marginBottom: '100px' }}>
      <Container>
        <PagesTitle>Our friends</PagesTitle>
        <OurFriends />
      </Container>
    </section>
  );
};
export default OurFriendsPage;
