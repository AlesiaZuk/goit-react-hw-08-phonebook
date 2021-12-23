import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

export default function AutNav() {
  return (
    <>
      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Log In
      </NavLink>
      <NavLink to="/register" className={s.link} activeClassName={s.activeLink}>
        Sign-up
      </NavLink>
    </>
  );
}
