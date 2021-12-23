import { useState } from 'react';
function LoginView() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
    //   dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginView;
