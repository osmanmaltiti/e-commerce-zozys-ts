export interface IItem {
  image: string;
  name: string;
  type: string;
  price: number;
  dimension: string;
  quantity: number;
  amount: number;
}

export const init = {
  cart: [
    {
      image: "/header2.jpg",
      name: "Wawa",
      type: "Beam",
      price: 35,
      dimension: "2x4",
      quantity: 0,
      amount: 0,
    },
  ] as Array<IItem>,
};
