import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { value: any } = {
    value: { showListChapterInDetail: false },
};

export const commonSlice = createSlice({
    name: "comic",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<any>) => {
            console.log("🚀 ~ state:", state);
            state.value = { ...state.value, ...action.payload };
        },
    },
});

export const { setValue } = commonSlice.actions;
export default commonSlice.reducer;
