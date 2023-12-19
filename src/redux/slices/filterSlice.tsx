import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IStateFilterSlice } from '../interface/interface';
import {
  SortPropertyEnum,
  TListSort,
} from '../../components/interface/interface';

const initialState: IStateFilterSlice = {
  activeCategoryId: 0,
  currentPage: 1,
  sortType: {
    name: 'популярности (DESC)',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action: PayloadAction<number>) => {
      state.activeCategoryId = action.payload;
    },
    setSortType: (state, action: PayloadAction<TListSort>) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<IStateFilterSlice>) => {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.activeCategoryId = Number(action.payload.activeCategoryId);
        state.sortType = action.payload.sortType;
      } else {
        (state.activeCategoryId = 0),
          (state.currentPage = 1),
          (state.sortType = {
            name: 'популярности (DESC)',
            sortProperty: SortPropertyEnum.RATING_DESC,
          });
      }
    },
  },
});
export const selectFilter = (state: RootState) => state.filterSlice;

export const { setActiveCategoryId, setSortType, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
