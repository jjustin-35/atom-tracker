import { configureStore } from '@reduxjs/toolkit';

import modal from './slices/modal';

import authApi from './apis/auth';
import timenodeApi from './apis/timenode';
import timelineApi from './apis/timeline';

const store = configureStore({
  reducer: {
    modal,
    [authApi.reducerPath]: authApi.reducer,
    [timenodeApi.reducerPath]: timenodeApi.reducer,
    [timelineApi.reducerPath]: timelineApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(timenodeApi.middleware)
      .concat(timelineApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
