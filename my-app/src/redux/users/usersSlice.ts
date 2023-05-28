//create a redux toolkit slice reducer for for logging in users

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import  {RootState} from '../../store';

interface UserState {
    password: string;
    email: string;
}

const initialState: UserState = {
    password: '',
    email: '',
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        user: (state, action: PayloadAction<UserState>) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
    },
    },
});

export const { user } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;







