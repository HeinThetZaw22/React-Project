import { ApiService } from "../ApiService";

const authEndpoints = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (arg) => ({
                url: '/login',
                method: "POST",
                body: arg,
            })
        }),
        register: builder.mutation({
            query: (arg) => ({
                url: '/register',
                method: "POST",
                body: arg,
            })
        }),
        getProfile: builder.query({
            query: () => '/user-profile'
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery} = authEndpoints;