import { createSlice } from "@reduxjs/toolkit";
import { DarkModeState } from "../../types/DarkModeState.type";

const initialState: DarkModeState = {
  toggled: true,
};

const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.toggled = !state.toggled;
    },
  },
});

export const { toggle } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
