import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '@/config';

const signupApi = createApi({
  reducerPath: 'signupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.HOST,
  }),
  endpoints: (builder) => ({
    getAuthForm: builder.query({
      query: () => '/api/signup',
    }),
  }),
});
