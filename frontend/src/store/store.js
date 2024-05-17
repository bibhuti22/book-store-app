import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice.js";
import userReducer from "./slices/userSlice.js";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});
