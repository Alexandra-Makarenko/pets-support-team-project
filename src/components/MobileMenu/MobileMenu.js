import { NavLink } from 'react-router-dom';
import css from './MobileMenu.module.css';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const MobileMenu = () => {
  const isLoggedIn = false;

  return (
    <div className={css.mobileMenu}>
      <div className={css.userMenuWrapper}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>

      <ul>
        <li className={css.mobileMenuItem}>
          <NavLink className={css.mobileMenulink} to="news">
            News
          </NavLink>
        </li>
        <li className={css.mobileMenuItem}>
          <NavLink className={css.mobileMenulink} to="find pet">
            Find pet
          </NavLink>
        </li>
        <li className={css.mobileMenuItem}>
          <NavLink className={css.mobileMenulink} to="our-friend">
            Our friend
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
