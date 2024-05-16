import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001",
});
export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (body) => ({
        url: "/send-email",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = api;
