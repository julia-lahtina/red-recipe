import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './favorites/favorites.slice'
import { userReducer } from './user/user.slice'

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        user: userReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch