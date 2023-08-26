// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const visualWebApi = createApi({
  reducerPath: "visualWebApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://xalphaend.onrender.com/api/`,
  }),
  endpoints: (builder) => ({
    getvisualWebByName: builder.query({
      query: (name) => `visualwebs${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetvisualWebByNameQuery } = visualWebApi;
