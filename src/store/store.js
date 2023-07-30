import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./cardhızmet/cardhızmet";
import HeaderReducer from "./headername/headername";
export const store = configureStore({
  reducer: {
    id: CardReducer,
    name: HeaderReducer,
  },
});
