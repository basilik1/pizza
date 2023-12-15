import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  interimValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setInterimValue: (state, action) => {
      state.interimValue = action.payload;
    },
  },
});

export const selectSearchValue = (state) => state.searchSlice;
export const { setSearchValue, setInterimValue } = searchSlice.actions;

export default searchSlice.reducer;
