import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { UserType } from '@/constants/types/api';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth',
  }),
  endpoints: (builder) => ({
    postSignUp: builder.mutation<void, UserType>({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostSignUpMutation } = authApi;

export default authApi;
