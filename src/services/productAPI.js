import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4600" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: `/product`,
      }),
    }),
    getProductDetailsById: builder.query({
        query:(id) =>({
            url: `/product/${id}`
        })
    })
  }),
});


export const { useGetProductQuery,useGetProductDetailsByIdQuery } = productApi;
