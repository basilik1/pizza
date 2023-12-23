import { TItems } from '../redux/interface/interface';

export const calcTotalCountPizza = (items: TItems[]) => {
  return items.reduce(
    (acc: number, obj: { count: number }) => acc + obj.count,
    0
  );
};
