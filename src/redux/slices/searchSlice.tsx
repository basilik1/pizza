import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IStateSearchSlice } from '../interface/interface';

const initialState: IStateSearchSlice = {
  searchValue: '',
  interimValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setInterimValue: (state, action: PayloadAction<string>) => {
      state.interimValue = action.payload;
    },
  },
});

export const selectSearchValue = (state: RootState) => state.searchSlice;
export const { setSearchValue, setInterimValue } = searchSlice.actions;

export default searchSlice.reducer;
