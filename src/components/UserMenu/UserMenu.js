import { Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logOut());
    <Redirect to="/login" />;
  }

  return (
    <div className={s.userMenu}>
      <p className={s.userMenu_text}>Welcome, {userName}!</p>
      <button className={s.userMenu_button} onClick={handleClick}>
        Log Off
      </button>
    </div>
  );
}
