import { configureStore } from '@reduxjs/toolkit';
import { noticesReducer } from './notices/noticesSlice';
import { filtersReducer } from './notices/filtersSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReduser } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    notices: noticesReducer,
    filters: filtersReducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
