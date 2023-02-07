import { useState } from 'react';

import { MdMenu } from 'react-icons/md';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { MobMenuBtn } from './Nav.styled';

export const Nav = () => {
  const [isOpen, setIsOnen] = useState(false);

  const mobMenuBtnHandler = () => {
    setIsOnen(isOpen => !isOpen);
  };

  return (
    <nav>
      <MobMenuBtn type="button" onClick={mobMenuBtnHandler}>
        <MdMenu size={30} />
      </MobMenuBtn>
      {isOpen && <MobileMenu />}
    </nav>
  );
};
