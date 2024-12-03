import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get("/books");
  return response.data;
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      // .addCase(fetchBooks.fulfilled, (state, action) => {
      //   state.books = action.payload;
      //   state.loading = false;
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload; // Update the books array
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default bookSlice.reducer;
