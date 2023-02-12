import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
    console.log(credentials);
    try {
      const response = await axios.post('/users/signup', credentials);
      console.log(response.data);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      // return alert('Try entering a different email');
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
      return alert('You entered an incorrect username or password');
      // return thunkAPI.rejectWithValue(error.message);
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
      // return alert('User is not found');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
