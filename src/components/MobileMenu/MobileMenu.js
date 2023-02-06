import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import {
  MobMenuContainer,
  UserMenuWrapper,
  MobMenuItem,
  MobMenulink,
} from './MobileMenu.styled';

export const MobileMenu = () => {
  const isLoggedIn = false;

  return (
    <MobMenuContainer>
      <UserMenuWrapper>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </UserMenuWrapper>

      <ul>
        <MobMenuItem>
          <MobMenulink to="news">News</MobMenulink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenulink to="find-pet">Find pet</MobMenulink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenulink to="our-friend">Our friend</MobMenulink>
        </MobMenuItem>
      </ul>
    </MobMenuContainer>
  );
};
