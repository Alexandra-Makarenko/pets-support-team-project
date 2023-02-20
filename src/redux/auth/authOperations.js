import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = message => {
  toast.warn(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};

// заглушка для розробки
// axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.baseURL = 'https://petly-5jqe.onrender.com/api';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responseRegister = await axios.post('/users/signup', credentials);
      // console.log(responseRegister.data);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(responseRegister.data.token);

      const loginBody = {
        email: credentials.email,
        password: credentials.password,
      };

      const responseLogin = await axios.post('/users/login', loginBody);
      setAuthHeader(responseLogin.data.token);
      return {
        registerRespons: responseRegister.data,
        loginRespons: responseLogin.data,
      };
    } catch (error) {
      console.log(error.message);
      notify('Email in use');
      // return alert('Try entering a different email');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/google
 */
export const registerWithGoogle = createAsyncThunk(
  '/users/google',
  async (_, thunkAPI) => {
    try {
      await axios.get('/users/google');
      // After successful registration, add the token to the HTTP header
      clearAuthHeader();
    } catch (error) {
      // return alert('Sorry, there was a login error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    // console.log(credentials);
    try {
      const response = await axios.post('/users/login', credentials);
      console.log(response.data);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      // return alert('You entered an incorrect username or password');
      notify('You entered an incorrect username or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/new_password
 * body: { email }
 */
export const password = createAsyncThunk(
  '/users/new_password',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post('/users/new_password', credentials);
      alert('Check your email');
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
      return alert('You entered an incorrect email');
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/users/logout');
    // After successful registration, add the token to the HTTP header
    clearAuthHeader();
  } catch (error) {
    return alert('Sorry, there was a login error');
    // return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHeader(token);

    try {
      // If there is a token, add it to the HTTP header and perform the request
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      // console.log('Unauthorized');
      return thunkAPI.rejectWithValue('Unauthorized');
    }
  }
);
