// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import {apiBaseQuery} from "../../config/env";
import {DetailProductResponse, ListProductResponse, RequestListProduct} from "./model";

// Define a service using a base URL and expected endpoints
const api = createApi({
  reducerPath: 'product',
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getListProduct: builder.query<ListProductResponse, RequestListProduct>({
      query: (query) => ({
        params: query.params,
        url: `/products${query.category && `/category/${query.category}`}`
      })
    }),
    getListCategory: builder.query<string[], null>({
      query: () => ({
        url: `/products/categories`
      })
    }),
    getDetailProduct: builder.query<DetailProductResponse, number>({
      query: (id) => ({
        url: `/products/${id}`
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetListProductQuery,
  useGetDetailProductQuery,
  useGetListCategoryQuery,
  // util: listProductUtil
} = api

export default api