import { UserData } from "~/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { data: UserData | null; token: string | null } = {
    data: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setInitialAuth: (state, action) => {
            state.data = action.payload?.user;
            state.token = action.payload?.token;
        },
        setUser: (state, action: PayloadAction<UserData>) => {
            state.data = action.payload;
        },
        setLogout: state => {
            state.data = null;
            state.token = null;
        },
    },
});

export const { setInitialAuth, setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
