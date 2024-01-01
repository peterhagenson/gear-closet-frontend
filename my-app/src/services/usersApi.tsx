import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RegisterUser, LoginUser, LoggedOnUser, AccessToken, Users}  from '../models/userTypes';



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
        loginUser: builder.query<LoggedOnUser, object>({
            query: (creds) => ({
                url: '/login',
                method: 'POST',
                body: creds
                })
    }),
        getUsers: builder.query<LoggedOnUser, AccessToken>({
        query: (user) => ({
            url: '/users',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
            })
}),
    }),
});

export const {useRegisterUserMutation, useLazyLoginUserQuery, useGetUsersQuery} = userApi;
export default userApi.reducer;