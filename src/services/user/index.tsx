// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import {apiBaseQuery} from "../../config/env";
import {DetailUserResponse} from "./model";

// Define a service using a base URL and expected endpoints
const api = createApi({
  reducerPath: 'user',
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getDetailUser: builder.query<DetailUserResponse, null>({
      query: () => ({
        url: '/users/1'
      })
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetDetailUserQuery,
  // util: listUserUtil
} = api

export default api