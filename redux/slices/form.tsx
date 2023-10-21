import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '@/config';

const signUpApi = createApi({
  reducerPath: 'signupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.HOST,
  }),
  endpoints: (builder) => ({
    postSignUp: builder.mutation({
      query: () => '/api/signup',
    }),
  }),
});
