import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ApiResponse, TimeNodeType } from '../../constants/types/api';

type TimelineParams = {
  userId: TimeNodeType['userId'];
  date: TimeNodeType['date'];
};

const timelineApi = createApi({
  reducerPath: 'timelineApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/timeline',
  }),
  endpoints: (builder) => ({
    getTimeline: builder.query<ApiResponse<TimeNodeType[]>, TimelineParams>({
      query: (params) =>
        params && `/?userId=${params.userId}&date=${params.date}`,
    }),
  }),
});

export const { useGetTimelineQuery } = timelineApi;

export default timelineApi;
