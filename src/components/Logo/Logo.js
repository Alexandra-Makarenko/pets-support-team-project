import css from './Logo.module.css';

import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div>
      <Link className={css.logo} to="/">
        pe<span className={css.logoAccent}>t</span>ly
      </Link>
    </div>
  );
};
