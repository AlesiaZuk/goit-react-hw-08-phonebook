import AutNav from '../AuthNav/AuthNav';
// import UserMenu from '../UserMenu/UserMenu';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <AutNav />
      {/* <UserMenu /> */}
    </header>
  );
}
