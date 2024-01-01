//create a redux toolkit slice reducer for for logging in users

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import  {RootState} from '../../store';

interface UserState {
    accessToken: string | null;
    username: string | null;
}

const initialState: UserState = {
    accessToken: null,
    username: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user: (state, action: PayloadAction<UserState>) => {
        state.username = action.payload.username;
        state.accessToken = action.payload.accessToken;
    },
    },
});

export const { user } = userSlice.actions;
export const userActions = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;







