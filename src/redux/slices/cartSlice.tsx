import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IStateCartSlice, TItems } from '../interface/interface';
import { RootState } from '../store';
import {
  getCartFromLocalStorage,
  getPriceFromLocalStorage,
} from '../../utils/getCartPriceFromLS';
import { changeTotalPrice } from '../../utils/changeTotalPrice';

const initialState: IStateCartSlice = {
  items: getCartFromLocalStorage(),
  totalPrice: getPriceFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TItems>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      changeTotalPrice(state);
    },
    removeItem: (state, action: PayloadAction<TItems>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);

      changeTotalPrice(state);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    backPizzaToCart: (state, action: PayloadAction<TItems>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }

      changeTotalPrice(state);
    },
  },
});

export const selectCart = (state: RootState) => state.cartSlice;
export const selectPizzaCount = (idCart: number) => (state: RootState) =>
  state.cartSlice.items.find((obj) => obj.id === idCart);

export const { addItem, removeItem, clearItems, backPizzaToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
