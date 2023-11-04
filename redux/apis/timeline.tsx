import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TimeNodeType } from '../../constants/types/api';

const timelineApi = createApi({
  reducerPath: 'timelineApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/timeline',
  }),
  endpoints: (builder) => ({
    postTimeNode: builder.mutation<void, TimeNodeType>({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostTimeNodeMutation } = timelineApi;

export default timelineApi;
