import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};
const changeTotalPrice = (state) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      changeTotalPrice(state);
    },
    removeItem: (state, action) => {
      const findItem = (state.items = state.items.filter(
        (obj) => obj.id !== action.payload.id
      ));
      findItem.count = 0;

      changeTotalPrice(state);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    backPizzaToCart: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      changeTotalPrice(state);
    },
  },
});

export const { addItem, removeItem, clearItems, backPizzaToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
