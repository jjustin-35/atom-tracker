import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ApiResponse, TimeNodeType } from '../../constants/types/api';

const timelineApi = createApi({
  reducerPath: 'timelineApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/timeline',
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
} = timelineApi;

export default timelineApi;
