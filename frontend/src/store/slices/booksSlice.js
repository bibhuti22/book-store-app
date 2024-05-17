import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchBooksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBooksSuccess: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    fetchBooksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators
export const { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } =
  booksSlice.actions;

export const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksStart());
  try {
    const response = await axios.get("http://localhost:4001/api/books");
    dispatch(fetchBooksSuccess(response.data));
  } catch (error) {
    console.error(error);
    dispatch(fetchBooksFailure(error.message));
  }
};

export default booksSlice.reducer;
