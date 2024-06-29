import { configureStore } from "@reduxjs/toolkit";
import animationReducer from "./animations/animationSlice";

export const store = configureStore({
  reducer: {
    animations: animationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
