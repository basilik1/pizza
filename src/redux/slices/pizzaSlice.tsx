import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const res = await axios.get(
      `https://656227ecdcd355c083249d4f.mockapi.io/api/v1/pizza_collections?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);
const initialState = {
  data: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.data = [];
        state.status = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.data = [];
        state.status = 'error';
      });
  },
});

export const selectPizza = (state) => state.pizzaSlice;

export const { setData } = pizzaSlice.actions;

export default pizzaSlice.reducer;
