import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import AutNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      {isLoggedIn ? <UserMenu /> : <AutNav />}
    </header>
  );
}
