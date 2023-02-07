import { filtersReducer } from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { petsReducer } from "./petsSlice";

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    filters: filtersReducer,
  },
});
