import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ApiResponse, UserType } from '@/constants/types/api';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth',
  }),
  endpoints: (builder) => ({
    getUser: builder.query<ApiResponse<UserType>, string>({
      query: (email) => `/user?email=${email}`,
    }),
    postSignUp: builder.mutation<void, UserType>({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetUserQuery, usePostSignUpMutation } = authApi;

export default authApi;
