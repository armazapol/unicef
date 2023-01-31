import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const scoreApiSlice = createApi({
  reducerPath: "scoreApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://5rnja5bt3h.execute-api.us-east-1.amazonaws.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.authState.token; //posiblemente se tenga que cambiar donde se encuentre el token
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  // refetchOnFocus:true,
  tagTypes: ["Scores"],
  endpoints: (builder) => ({
    getQuestScore: builder.query({
      query: (args) => {
        // Destructuring Object
        const { userId, numberTrivia } = args;
        return {
          // Returns url with multiple args
          url: `/test/questionNumbers/${numberTrivia}/highestScores/${userId}`,
          method: "GET",
        };
      },
      // invalidatesTags: ["Scores"]
    }),
    updateScore: builder.mutation({
      query: (args) => {
        // Destructuring Object
        const { userId, numberTrivia, data } = args;
        return {
          // Returns url with multiple args
          url: `/test/questionNumbers/${numberTrivia}/highestScores/${userId}`,
          method: "PUT",
          body: data
        };
      },
      // invalidatesTags: ["Scores"]
    }),
  }),
});

export const { useGetQuestScoreQuery, useUpdateScoreMutation, useLazyGetQuestScoreQuery } = scoreApiSlice;
