import { NavSection, Link, Container } from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavSection>
      <Container>
        <li>
          <Link to="sell">sell</Link>
        </li>
        <li>
          <Link to="lost-found">lost found</Link>
        </li>
        <li>
          <Link to="in-good-hands">in good hands</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="favorite">favorite ads</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="own">my ads</Link>
          </li>
        )}
      </Container>
    </NavSection>
  );
};
