import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import React from 'react'

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <div>
      <h2>Login Page</h2>

      {isAuthenticated
        ? (<p>You are logged in</p>)
        : (<button aria-label="Authentification button" onClick={() => dispatch(login())}> Login </button> )
      }
    </div>
  );
}

export default Login;