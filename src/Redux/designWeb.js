// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const designWebApi = createApi({
  reducerPath: "designWebApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getdesignWebByName: builder.query({
      query: (name) => `designwebs${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetdesignWebByNameQuery } = designWebApi;
