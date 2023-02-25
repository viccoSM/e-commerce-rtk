// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import {apiBaseQuery} from "../../config/env";
import {ListCartResponse, RequestAndResponsePostCart} from "./model";

// Define a service using a base URL and expected endpoints
const api = createApi({
  reducerPath: 'cart',
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    postCart: builder.mutation<RequestAndResponsePostCart, RequestAndResponsePostCart>({
      query: (data) => ({
        url: '/carts',
        method: 'POST',
        body: data
      })
    }),
    getListCartUser: builder.query<ListCartResponse, number>({
      query: (id) => ({
        url: `/carts/user/${id}`
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  usePostCartMutation,
  useLazyGetListCartUserQuery
  // util: listCartUtil
} = api

export default api