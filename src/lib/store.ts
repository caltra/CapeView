import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../lib/features/users/usersSlice"
import notificationReducer from "../lib/features/notifications/notificationSlice"


export const createStore = () => {
    return configureStore({
        reducer: {
            users: usersReducer,
            notification: notificationReducer,
        }
    })
}

export type AppStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];