import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import User  from '../models/user';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        registerUser: builder.mutation<User, object>({
            query: (creds) => ({
                url: '/register',
                method: 'POST',
                body: creds
            })
        }),
    })
});

export const {useRegisterUserMutation} = userApi;
export default userApi.reducer;