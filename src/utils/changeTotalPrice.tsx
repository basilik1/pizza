import { IStateCartSlice } from '../redux/interface/interface';

export const changeTotalPrice = (state: IStateCartSlice) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
