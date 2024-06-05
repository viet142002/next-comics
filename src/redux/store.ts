import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "~/redux/features/authSlice";
import comicReducer from "~/redux/features/comicSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    comic: comicReducer,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
