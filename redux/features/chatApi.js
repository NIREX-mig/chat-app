"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        headers.set("authToken", localStorage.getItem('authToken'));
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getContects: builder.query({
        query: () => `/api/contect/getcontects`,
      }),
    }),
  });
  
  
  export const { useGetContectsQuery } = chatApi;