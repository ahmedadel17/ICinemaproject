import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `https://api.themoviedb.org/`;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    getAllMovie: builder.query({
      query: (arge) => `/?page=${arge.page}`,
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetAllMovieQuery } = movieApi;
