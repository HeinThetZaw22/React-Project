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
        })
    })
})

export const { useLoginMutation, useRegisterMutation} = authEndpoints;