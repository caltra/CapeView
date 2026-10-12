import { InternalProfile } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedUserState {
    user: InternalProfile | null;
}

const initialState: SelectedUserState = {
    user: null
}

export const userSelectionSlice = createSlice({
    name: "userSelection",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<InternalProfile>) => {
            state.user = action.payload;
        }
    }
});

export const { setUser } = userSelectionSlice.actions;
export default userSelectionSlice.reducer;