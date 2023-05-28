import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './redux/users/usersSlice'
import {userApi} from './services/usersApi'

export const store = configureStore({
  reducer: {
    user: usersSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userApi.middleware),  
})

//export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

