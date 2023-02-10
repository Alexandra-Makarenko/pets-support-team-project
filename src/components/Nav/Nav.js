import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import {
  MobMenuBtn,
  NavBlock,
  UserMenuWrapper,
  MenuList,
  MenuItem,
  MenuLink,
} from './Nav.styled';

import { ReactComponent as Burger } from './burger-menu.svg';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Nav = () => {
  const [isOpen, setIsOnen] = useState(false);
  const isLoggedIn = false;

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
          <MenuLink to="notices">Find pet</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="friends">Our friend</MenuLink>
        </MenuItem>
      </MenuList>
      <UserMenuWrapper>
        {isLoggedIn ? (
          <UserMenu mobMenuToggler={mobMenuToggler} />
        ) : (
          <AuthNav mobMenuToggler={mobMenuToggler} />
        )}
      </UserMenuWrapper>
      <MobMenuBtn type="button" onClick={mobMenuToggler} isOpen={isOpen}>
        <Burger />
      </MobMenuBtn>
      {isOpen && <MobileMenu mobMenuToggler={mobMenuToggler} />}
    </NavBlock>
  );
};
