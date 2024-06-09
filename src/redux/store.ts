import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "~/redux/features/authSlice";
import comicReducer from "~/redux/features/comicSlice";
import commonReducer from "~/redux/features/commonSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    comic: comicReducer,
    common: commonReducer,
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
