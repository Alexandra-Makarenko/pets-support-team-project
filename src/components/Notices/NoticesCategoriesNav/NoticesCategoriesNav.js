import {
  NavSection,
  Link,
  Container,
  DesktopContainer,
  AuthContainer,
  TabletContainer,
} from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';


export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();



  return (
    <NavSection>
      <Container>
        <DesktopContainer>
          <li>
            <Link to="sell">Sell</Link>
          </li>
          <li>
            <Link to="lost-found">Lost/Found</Link>
          </li>
          <li>
            <Link to="in-good-hands">In good hands</Link>
          </li>
        </DesktopContainer>
        <TabletContainer>
          <li>
            <Link to="lost-found">Lost/Found</Link>
          </li>
          <li>
            <Link to="in-good-hands">In good hands</Link>
          </li>
          <li>
            <Link to="sell">Sell</Link>
          </li>
        </TabletContainer>
        <AuthContainer>
          {isLoggedIn && (
            <li>
              <Link to="favorite">Favorite ads</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="own">My ads</Link>
            </li>
          )}
        </AuthContainer>
      </Container>
    </NavSection>
  );
};
