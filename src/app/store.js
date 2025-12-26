import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

import { authApi } from '../features/auth/authApi';
import { productsApi } from '../features/products/productsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware),
});