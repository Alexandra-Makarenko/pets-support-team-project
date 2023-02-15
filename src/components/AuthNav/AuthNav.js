import { useLocation } from 'react-router-dom';
import { Button } from 'components/Button/Button.styled';
import { AuthNavBtn } from './AuthNav.styled';

export const AuthNav = mobMenuToggler => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/register' ? (
        <AuthNavBtn to="login" onClick={mobMenuToggler}>
          <Button>Login</Button>
        </AuthNavBtn>
      ) : (
        <AuthNavBtn to="login" onClick={mobMenuToggler}>
          <Button primary>Login</Button>
        </AuthNavBtn>
      )}

      {pathname === '/register' ? (
        <AuthNavBtn to="register" onClick={mobMenuToggler}>
          <Button primary>Registration</Button>
        </AuthNavBtn>
      ) : (
        <AuthNavBtn to="register" onClick={mobMenuToggler}>
          <Button>Registration</Button>
        </AuthNavBtn>
      )}
    </>
  );
};
