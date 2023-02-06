import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Naigation/Navigation';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  );
};
