import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Naigation/Navigation';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};
