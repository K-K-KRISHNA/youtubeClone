import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../features/DataSlice";

export const store = configureStore({
  reducer: {
    videosDataSlice:DataSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

