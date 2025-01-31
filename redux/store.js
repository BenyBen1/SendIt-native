import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "../components/packageSlice";

export const store = configureStore({
  reducer: {
    packages: packageReducer,
  },
});
