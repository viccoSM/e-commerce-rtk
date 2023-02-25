import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseUrl:string = 'https://fakestoreapi.com'

export const apiBaseQuery = fetchBaseQuery({
  baseUrl
})