import { configureStore } from '@reduxjs/toolkit'
import userSlice from './redux/users/userSlice'
import {userApi} from './services/usersApi'

export const store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userApi.middleware),  
})

//export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

