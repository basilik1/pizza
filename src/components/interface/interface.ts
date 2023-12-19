export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
}
export type TListSort = {
  name: string;
  sortProperty: SortPropertyEnum;
};
export type TListParams = {
  sortType: TListSort;
};

export type TCategoriesList = { name: string; id: number };
export type TNutritional = {
  nutritional: {
    property: string;
    value: number;
  }[];
};

export interface ICategoriesProps {
  value: number;
  onClickCategory: (id: number) => void;
}
export interface ICartItem {
  item: {
    imageUrl: string;
    typeNamesBoard: string;
    title: string;
    price: number;
    sizes: number;
    weight: number;
    count: number;
    id: number;
  };
}

export interface IPaginationProps {
  currentPage: number;
  onChangePage: (event: number) => void;
}

export interface IBlockPizzaProps {
  props: {
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
}
export interface IModalPizzaProps extends IBlockPizzaProps {
  onClick: () => void;
  activeBoard: number;
  activeSize: number;
  typeNamesBoard: string[];
}

export type TBlockPizzaItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number;
  typeNamesBoard: string;
  weight: number;
  count: number;
};
