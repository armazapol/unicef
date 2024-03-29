import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlAuth = "https://twox1syzri.execute-api.us-east-1.amazonaws.com"
const urlGetAuth = "https://zdxyw38bz6.execute-api.us-east-1.amazonaws.com"

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
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
        url: `${urlGetAuth}/test/users/${userId}`,
        method: "GET",
      }),
      // providesTags: ["Auth"],
      // transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: `${urlAuth}/test/userCredentials`,
        method: "POST",
        body: newUser,
      }),
      // invalidatesTags: ["Auth"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `${urlAuth}/test/userCredentials/login`,
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["Auth"],
    }),
    verifiedCredentials: builder.mutation({
      query: (data) => ({
        url: `${urlAuth}/test/userCredentials/isVerified`,
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
  useVerifiedCredentialsMutation,
  // useUpdateTaskMutation,
  // useDeleteTaskMutation,
} = apiSlice;
