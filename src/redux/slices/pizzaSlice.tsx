import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import {
  IStatePizzaSlice,
  Status,
  TData,
  TParamsPizzaSlice,
} from '../interface/interface';

export const fetchPizzas = createAsyncThunk<TData[], TParamsPizzaSlice>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<TData[]>(
      `https://656227ecdcd355c083249d4f.mockapi.io/api/v1/pizza_collections?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState: IStatePizzaSlice = {
  data: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TData[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.data = [];
        state.status = Status.LOADING;
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<TData[]>) => {
          state.data = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchPizzas.rejected, (state) => {
        state.data = [];
        state.status = Status.ERROR;
      });
  },
});

export const selectPizzaData = (state: RootState) => state.pizzaSlice;

export const { setData } = pizzaSlice.actions;

export default pizzaSlice.reducer;
