import { createSlice } from "@reduxjs/toolkit";

const packageSlice = createSlice({
  name: "packages",
  initialState: [],
  reducers: {
    addPackage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPackage } = packageSlice.actions;
export default packageSlice.reducer;
