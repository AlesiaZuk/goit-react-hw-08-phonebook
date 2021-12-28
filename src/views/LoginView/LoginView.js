import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import Section from '../../components/Section/Section';
import s from './LoginView.module.css';

function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <Section title="Log In">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label className={s.form_label}>
            <input
              className={s.form_input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="E-mail:"
            />
          </label>
          <label className={s.form_label}>
            <input
              className={s.form_input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password:"
            />
          </label>
        </div>
        <button className={s.form_button} type="submit">
          <p className={s.form_button_text}>Log In</p>
        </button>
      </form>
    </Section>
  );
}

export default LoginView;
