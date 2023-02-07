import { configureStore } from '@reduxjs/toolkit';
import { petsReducer } from './petsSlice';
import { filtersReducer } from './filtersSlice';

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
    pets: petsReducer,
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
