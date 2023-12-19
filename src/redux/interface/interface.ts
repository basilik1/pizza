import { TListSort } from '../../components/interface/interface';

export type TItems = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number;
  typeNamesBoard: string;
  weight: number;
  count: number;
};
export interface IStateCartSlice {
  totalPrice: number;
  items: TItems[];
}

export interface IStateFilterSlice {
  activeCategoryId: number;
  currentPage: number;
  sortType: TListSort;
}
export type TData = {
  id: number;
  imageUrl: string[];
  title: string;
  price: number[];
  sizes: number[];
  types: number[];
  weight: number[];
  nutritional: { property: string; value: number }[];
  composition: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface IStatePizzaSlice {
  data: TData[];
  status: Status;
}

export interface IStateSearchSlice {
  searchValue: string;
  interimValue: string;
}
export type TParamsPizzaSlice = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
};
