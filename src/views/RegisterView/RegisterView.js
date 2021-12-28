import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import Section from '../../components/Section/Section';

import s from './RegisterView.module.css';

function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Section title="Register">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label className={s.form_label}>
            <input
              className={s.form_input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Username:"
            />
          </label>
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
          <p className={s.form_button_text}>Register</p>
        </button>
      </form>
    </Section>
  );
}

export default RegisterView;
