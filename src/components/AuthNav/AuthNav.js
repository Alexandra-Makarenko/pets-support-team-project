import { Button } from 'components/Button/Button.styled';
import { AuthNavBtn } from './AuthNav.styled';

export const AuthNav = mobMenuToggler => {
  return (
    <>
      <AuthNavBtn to="login" onClick={mobMenuToggler}>
        <Button primary>Login</Button>
      </AuthNavBtn>
      <AuthNavBtn to="register" onClick={mobMenuToggler}>
        <Button>Register</Button>
      </AuthNavBtn>
    </>
  );
};
