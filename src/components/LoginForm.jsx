import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };
    setUser(userData);
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Login</h1>

      <form
        style={{ display: 'grid', textAlign: 'center', justifyItems: 'center' }}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        <button type='submit'>Submit</button>
      </form>
      <p>{user ? (user.username + ' ' + user.password) : ''}</p>
    </div>
  );
}
