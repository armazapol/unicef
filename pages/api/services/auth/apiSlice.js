import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zdxyw38bz6.execute-api.us-east-1.amazonaws.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.authState.token; //posiblemente se tenga que cambiar donde se encuentre el token
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => ({
        url: `/test/users/${userId}`,
        method: "GET",
      }),
      // providesTags: ["Auth"],
      // transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/test/users",
        method: "POST",
        body: newUser,
      }),
      // invalidatesTags: ["Auth"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/test/users/login",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["Auth"],
    }),
    updateScore: builder.mutation({
      query: (userId, questNumber, data) => ({
        url: `/test/questionNumbers/${questNumber}/highestScores/${userId}`,
        method: "PUT",
        body: data,
      }),
      // invalidatesTags: ["Auth"],
    }),
    // updateTask: builder.mutation({
    //   query: (updatedTask) => ({
    //     url: `/tasks/${updatedTask.id}`,
    //     method: "PATCH",
    //     body: updatedTask,
    //   }),
    //   invalidatesTags: ["Tasks"],
    // }),
    // deleteTask: builder.mutation({
    //   query: (taskId) => ({
    //     url: `/tasks/${taskId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Tasks"],
    // }),
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useLazyGetUserQuery,
  useUpdateScoreMutation
  // useUpdateTaskMutation,
  // useDeleteTaskMutation,
} = apiSlice;
