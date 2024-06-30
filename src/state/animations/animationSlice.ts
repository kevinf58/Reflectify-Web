import { createSlice } from "@reduxjs/toolkit";
import { AnimationState } from "../../types/AnimationState.type";

const initialState: AnimationState = {
  toggled: true,
};

const animationSlice = createSlice({
  name: "animations",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.toggled = !state.toggled;
    },
  },
});

export const { toggle } = animationSlice.actions;

export default animationSlice.reducer;
