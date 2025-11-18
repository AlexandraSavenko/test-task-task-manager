import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boards/slice";
import modalReducer from "./modal/slice";
export const store = configureStore({
    reducer: {
boards: boardReducer,
modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch