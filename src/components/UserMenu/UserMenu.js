import { UserMenuBtn, UserIcon } from './UserMenu.styled';
import { Button } from 'components/Button/Button.styled';

export const UserMenu = mobMenuToggler => {
  return (
    <UserMenuBtn to="user" onClick={mobMenuToggler}>
      <Button primary icon>
        <UserIcon sx={{ fontSize: 20 }} /> Account
      </Button>
    </UserMenuBtn>
  );
};
