export interface IItem {
  id: string;
  image: string;
  name: string;
  type: string;
  price: number;
  dimension: string;
  quantity: number;
  amount: number;
  stock: number;
  description: string;
}

export const init = {
  cart: [] as Array<IItem>,
};
