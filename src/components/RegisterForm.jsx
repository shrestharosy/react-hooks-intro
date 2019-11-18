import React, { useState } from 'react';

const initialState = { username: '', email: '', password: '' };

export default function Register() {
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialState)
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Register</h1>

      <form
        style={{ display: 'grid', textAlign: 'center', justifyItems: 'center' }}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleChange}
          value={form.username}
        />
        <br />
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={form.email}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
          value={form.password}
        />
        <button type='submit'>Submit</button>
        <p>
          {user ? user.username + ' ' + user.password + ' ' + user.email : ''}
        </p>
      </form>
    </div>
  );
}
