import s from './UserMenu.module.css';
export default function UserMenu() {
  return (
    <div className={s.userMenu}>
      <p className={s.userMenu_text}>Welcome, !</p>
      <button className={s.userMenu_button}>Log Off</button>
    </div>
  );
}
