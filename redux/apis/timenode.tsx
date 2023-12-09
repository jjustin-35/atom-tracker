import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ApiResponse, TimeNodeType } from '../../constants/types/api';

const timenodeApi = createApi({
  reducerPath: 'timenodeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/timenode',
  }),
  endpoints: (builder) => ({
    getTimeNode: builder.query<ApiResponse<TimeNodeType>, string | null>({
      query: (id) => id && `/?id=${id}`,
    }),
    postTimeNode: builder.mutation<void, TimeNodeType>({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
    }),
    putTimeNode: builder.mutation<void, TimeNodeType>({
      query: (data) => ({
        url: '/',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetTimeNodeQuery,
  usePostTimeNodeMutation,
  usePutTimeNodeMutation,
} = timenodeApi;

export default timenodeApi;
