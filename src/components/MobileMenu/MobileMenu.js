import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { MobMenuBtn } from './MobileMenu.styled';
import { Close } from 'components/Nav/Nav.styled';
import {
  MobMenuContainer,
  UserMenuWrapper,
  MobMenuList,
  MobMenuItem,
  MobMenulink,
  MobMenuHeader,
} from './MobileMenu.styled';
import { Logo } from 'components/Logo/Logo';

export const MobileMenu = ({ mobMenuToggler }) => {
  const { isLoggedIn } = useAuth();

  return (
    <MobMenuContainer>
      <MobMenuHeader>
        <Logo />

        <MobMenuBtn type="button" onClick={mobMenuToggler}>
          <Close />
        </MobMenuBtn>
      </MobMenuHeader>
      <UserMenuWrapper>
        {isLoggedIn ? (
          <UserMenu mobMenuToggler={mobMenuToggler} />
        ) : (
          <AuthNav mobMenuToggler={mobMenuToggler} />
        )}
      </UserMenuWrapper>

      <MobMenuList>
        <MobMenuItem>
          <MobMenulink to="news" onClick={mobMenuToggler}>
            News
          </MobMenulink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenulink to="notices/sell" onClick={mobMenuToggler}>
            Find pet
          </MobMenulink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenulink to="friends" onClick={mobMenuToggler}>
            Our friends
          </MobMenulink>
        </MobMenuItem>
      </MobMenuList>
    </MobMenuContainer>
  );
};
