import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterItemData } from "~/types";

const initialState: {
    list: Array<ChapterItemData>;
    current: string;
} = {
    list: [
        {
            filename: "",
            chapter_name: "",
            chapter_title: "",
            chapter_api_data: "",
        },
    ],
    current: "",
};

export const comicSlide = createSlice({
    name: "comic",
    initialState,
    reducers: {
        setListComic: (state, action: PayloadAction<any>) => {
            state.list = action.payload;
        },
        setCurrentComic: (state, action: PayloadAction<string>) => {
            state.current = action.payload;
        },
    },
});

export const { setListComic, setCurrentComic } = comicSlide.actions;
export default comicSlide.reducer;
