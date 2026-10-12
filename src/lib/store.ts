import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../lib/features/users/usersSlice"
import userSelectionReducer from "../lib/features/userSelection/userSelectionSlice"


export const createStore = () => {
    return configureStore({
        reducer: {
            users: usersReducer,
            userSelection: userSelectionReducer,
        }
    })
}

export type AppStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];