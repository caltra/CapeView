import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
    users: string[];
}

const initialState: UsersState = {
    users: []
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {
            state.users.push(action.payload);
        }
    }
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;