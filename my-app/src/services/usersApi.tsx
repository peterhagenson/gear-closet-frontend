import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RegisterUser, LoginUser}  from '../models/userTypes';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: (builder) => ({
        registerUser: builder.mutation<RegisterUser, object>({
            query: (creds) => ({
                url: '/register',
                method: 'POST',
                body: creds
            })
        }),
        loginUser: builder.mutation<LoginUser, object>({
            query: (creds) => ({
                url: '/login',
                method: 'POST',
                body: creds
                })
    })
})
});

export const {useRegisterUserMutation, useLoginUserMutation} = userApi;
export default userApi.reducer;