import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const QUOTES_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

const initialState = {
  item: {
    text: "",
    author: "",
    image: ""
  },
  loading: false,
};

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  try {
    const response = await axios.get(QUOTES_URL);
    const data = response.data[0];
    return {
      text: data.quote,
      author: data.character,
      image: data.image,
    };
  } catch (error) {
    return error.message;
  }
});

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state)=>{
      state.loading = true
    })
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.loading = false
      state.item = action.payload
    })
    builder.addCase(fetchQuote.rejected, (state)=>{
      state.loading = false
    })
  },
});

export default quoteSlice.reducer;
