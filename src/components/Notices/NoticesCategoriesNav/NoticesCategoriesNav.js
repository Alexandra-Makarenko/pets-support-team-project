import { NavSection, Link, Container,DesktopContainer,AuthContainer,TabletContainer } from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavSection>
      <Container>
      <DesktopContainer>
        <li>
          <Link to="sell">sell</Link>
        </li>
        <li>
          <Link to="lost-found">lost found</Link>
        </li>
        <li>
          <Link to="in-good-hands">in good hands</Link>
        </li>
        </DesktopContainer>
        <TabletContainer>        
        <li>
          <Link to="lost-found">lost found</Link>
        </li>
        <li>
          <Link to="in-good-hands">in good hands</Link>
        </li>
        <li>
          <Link to="sell">sell</Link>
        </li> 
      </TabletContainer>
      <AuthContainer>
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
        </AuthContainer>
        </Container>
    </NavSection>
  );
};
