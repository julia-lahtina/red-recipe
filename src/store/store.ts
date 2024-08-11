import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './favorites/favorites.slice'
import { userReducer } from './user/user.slice'
import { api } from './api/api'

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => 
         getDefaultMiddleware().concat(api.middleware)
    ,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch