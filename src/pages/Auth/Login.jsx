import { useDispatch } from 'react-redux';

import React from 'react'
import { useState } from 'react';
import { useLoginMutation } from '../../api/authApi';
import { setUser } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';

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
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Paper elevation={5} variant="outlined"  sx={{ p: 3, width: 300, borderRadius: 3 }}>

        <Typography variant="h5" mb={1} align="center">
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>

          <TextField
            label="Username"
            value={username}
            fullWidth
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Password"
            value={password}
            type="password"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2}}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Login'}
          </Button>

          {error && (
            <Typography color="error" mt={2} align="center">
              Login failed
            </Typography>
          )}

        </Box>
      </Paper>
    </Box>
  );
}

export default Login;