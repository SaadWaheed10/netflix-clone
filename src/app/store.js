import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";
// import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

