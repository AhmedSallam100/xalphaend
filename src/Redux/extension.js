// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const extensionApi = createApi({
  reducerPath: "extensionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://xalphaend.onrender.com/api/`,
  }),
  endpoints: (builder) => ({
    getextensionByName: builder.query({
      query: (name) => `extensions${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetextensionByNameQuery } = extensionApi;
