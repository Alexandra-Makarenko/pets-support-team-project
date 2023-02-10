import { NavSection, Link, Container } from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  // const isLoggedIn = useSelector(selectIsLoggedIn)
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
