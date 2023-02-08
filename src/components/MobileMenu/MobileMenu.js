import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import {
  MobMenuContainer,
  UserMenuWrapper,
  MobMenuList,
  MobMenuItem,
  MobMenulink,
} from './MobileMenu.styled';

export const MobileMenu = mobMenuToggler => {
  const isLoggedIn = false;

  return (
    <MobMenuContainer>
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
          <MobMenulink to="notices" onClick={mobMenuToggler}>
            Find pet
          </MobMenulink>
        </MobMenuItem>
        <MobMenuItem>
          <MobMenulink to="friends" onClick={mobMenuToggler}>
            Our friend
          </MobMenulink>
        </MobMenuItem>
      </MobMenuList>
    </MobMenuContainer>
  );
};
