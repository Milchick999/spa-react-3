import { useDispatch } from 'react-redux';

import React from 'react'
import { useState } from 'react';
import { useLoginMutation } from './authApi';
import { setUser } from './authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login({ username, password }).unwrap();
      dispatch(setUser(user));
      navigate('/products');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      {error && <p style={{ color: 'red' }}>Login failed</p>}
    </form>
  );
}

export default Login;