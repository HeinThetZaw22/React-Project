import { ApiService } from "../ApiService";

const contactEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (arg) => ({
        url: "/contact",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["contacts"],
    }),
    getContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
      providesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/ ${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
    updataContact: builder.mutation({
      query: (arg) => ({
        url: `/contact/ ${arg.id}`,
        method: "PUT",
        body: arg,
      }),
      invalidatesTags: ["contacts"]
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactQuery,
  useDeleteContactMutation,
  useUpdataContactMutation
} = contactEndpoints;
