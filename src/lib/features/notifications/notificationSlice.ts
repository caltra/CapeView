import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface NotificationState {
    value: string;
}

const initialState: NotificationState = {
    value: ""
}

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;