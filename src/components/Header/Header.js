import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
};
