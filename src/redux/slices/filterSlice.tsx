import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryId: 0,
  currentPage: 1,
  sortType: {
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
      state.activeCategoryId = Number(action.payload.activeCategoryId);
    },
  },
});

export const { setActiveCategoryId, setSortType, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
