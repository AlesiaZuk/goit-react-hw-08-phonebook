import { useState } from 'react';

function RegisterView() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case name:
        return setName(value);
      case email:
        return setEmail(value);
      case password:
        return setPassword(value);
      default:
        return;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    //   dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <label>
        Name:
        <input type="name" name="name" value={name} onChange={handleChange} />
      </label>

      <label>
        Email:
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

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterView;
