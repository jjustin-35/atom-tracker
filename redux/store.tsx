import { configureStore } from '@reduxjs/toolkit';
import authApi from './apis/auth';
import timelineApi from './apis/timeline';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [timelineApi.reducerPath]: timelineApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(timelineApi.middleware),
});

export default store;
