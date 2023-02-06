import { useState } from 'react';

import { MdMenu } from 'react-icons/md';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import css from './Nav.module.css';

export const Nav = () => {
  const [isOpen, setIsOnen] = useState(false);

  const mobMenuBtnHandler = () => {
    setIsOnen(isOpen => !isOpen);
  };

  return (
    <nav>
      <button
        type="button"
        className={css.mobMenuBtn}
        onClick={mobMenuBtnHandler}
      >
        <MdMenu size={30} />
      </button>
      {isOpen && <MobileMenu />}
    </nav>
  );
};
