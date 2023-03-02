import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { clickSlice } from './follow-slice';

const followsPersistConfig = {
  key: 'root',
  storage,
};

const persistedFollowsReducer = persistReducer(
  followsPersistConfig,
  clickSlice.reducer
);

export const store = configureStore({
  reducer: { click: persistedFollowsReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
