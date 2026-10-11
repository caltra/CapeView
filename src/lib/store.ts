import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../lib/features/users/usersSlice"


export const createStore = () => {
    return configureStore({
        reducer: {
            users: usersReducer,
        }
    })
}

export type AppStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];