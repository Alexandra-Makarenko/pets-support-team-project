import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { MobMenuBtn, Burger } from './Nav.styled';

export const Nav = () => {
  const [isOpen, setIsOnen] = useState(false);

  const mobMenuToggler = () => {
    setIsOnen(isOpen => !isOpen);
  };

  return (
    <nav>
      <MobMenuBtn type="button" onClick={mobMenuToggler} isOpen={isOpen}>
        <Burger sx={{ fontSize: 40 }} />
      </MobMenuBtn>
      {isOpen && <MobileMenu isOpen={isOpen} mobMenuToggler={mobMenuToggler} />}
    </nav>
  );
};
