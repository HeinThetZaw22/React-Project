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
        }),
        logout: builder.mutation({
            query: () => ({
                url: "user-logout",
                method: "POST",

            }),
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery, useLogoutMutation} = authEndpoints;