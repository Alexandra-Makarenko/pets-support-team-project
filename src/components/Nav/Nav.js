import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import {
  MobMenuBtn,
  NavBlock,
  UserMenuWrapper,
  MenuList,
  MenuItem,
  MenuLink,
  Burger,
} from './Nav.styled';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Nav = () => {
  const [isOpen, setIsOnen] = useState(false);
  const { isLoggedIn } = useAuth();

  const mobMenuToggler = () => {
    setIsOnen(isOpen => !isOpen);
  };

  return (
    <NavBlock>
      <MenuList>
        <MenuItem>
          <MenuLink to="news">News</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="notices/sell">Find pet</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="friends">Our friends</MenuLink>
        </MenuItem>
      </MenuList>
      <UserMenuWrapper>
        {isLoggedIn ? (
          <UserMenu mobMenuToggler={mobMenuToggler} />
        ) : (
          <AuthNav mobMenuToggler={mobMenuToggler} />
        )}
      </UserMenuWrapper>
      <MobMenuBtn type="button" onClick={mobMenuToggler}>
        <Burger />
      </MobMenuBtn>
      {isOpen && <MobileMenu mobMenuToggler={mobMenuToggler} />}
    </NavBlock>
  );
};
